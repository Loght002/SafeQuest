document.addEventListener('DOMContentLoaded', () => {
    // --- Referências aos Elementos do DOM ---
    const gameContainer = document.getElementById('game-container');
    const gamePanel = document.getElementById('electrical-panel');
    const timerDisplay = document.getElementById('timer');
    const brokenWiresCountDisplay = document.getElementById('broken-wires-count');
    const wiresFixedTotalDisplay = document.getElementById('wires-fixed-total');
    const araraSpeechBubble = document.getElementById('arara-speech-bubble');
    const tape = document.getElementById('tape');
    const endGameModal = document.getElementById('end-game-modal');
    const endGameTitle = document.getElementById('end-game-title');
    const endGameMessage = document.getElementById('end-game-message');
    const restartButton = document.getElementById('restart-button');

    // --- Variáveis de Controle do Jogo ---
    const TOTAL_WIRES = 16;
    const WIRES_PER_ROW = 8;
    const GOAL_TO_WIN = 30;
    const INITIAL_TIME = 60;
    
    let timer;
    let timerInterval;
    let wireBreakTimeout;
    let brokenWires = 0;
    let wiresFixedTotal = 0;
    let gameActive = false;

    // --- Lógica de Redimensionamento da Tela ---
    function resizeGame() {
        // MUDANÇA: Atualizado para as novas dimensões base
        const scale = Math.min(window.innerWidth / 900, window.innerHeight / 800);
        gameContainer.style.transform = `scale(${scale})`;
    }
    window.addEventListener('resize', resizeGame);

    // --- Mensagens da Arara ---
    const araraMessages = {
        start: "O painel está instável! Conserte " + GOAL_TO_WIN + " fios antes que o tempo acabe!",
        fixSuccess: ["Bom trabalho!", "Continue assim!", "Excelente!", "Você é rápido nisso!"],
        win: "Incrível! Você consertou todos os fios necessários e salvou a nave!",
        loseTime: "O tempo acabou! O sistema entrou em colapso...",
    };

    function speak(message) { araraSpeechBubble.textContent = message; }
    function speakRandom(messageArray) {
        const msg = messageArray[Math.floor(Math.random() * messageArray.length)];
        speak(msg);
    }
    
    // --- Funções Principais do Jogo ---

    function startGame() {
        resizeGame();
        
        gameActive = true;
        timer = INITIAL_TIME;
        brokenWires = 0;
        wiresFixedTotal = 0;
        
        // Reset da UI
        timerDisplay.textContent = timer;
        brokenWiresCountDisplay.textContent = brokenWires;
        wiresFixedTotalDisplay.textContent = `${wiresFixedTotal} / ${GOAL_TO_WIN}`;
        timerDisplay.classList.remove('low-time');
        gamePanel.innerHTML = '';
        endGameModal.classList.add('hidden');
        speak(araraMessages.start);
        
        clearInterval(timerInterval);
        clearTimeout(wireBreakTimeout);

        setupWires();
        
        timerInterval = setInterval(updateTimer, 1000);
        scheduleNextWireBreak();
    }

    function setupWires() {
        const row1 = document.createElement('div');
        row1.className = 'wire-row';
        const row2 = document.createElement('div');
        row2.className = 'wire-row';

        for (let i = 0; i < TOTAL_WIRES; i++) {
            const wire = document.createElement('div');
            wire.classList.add('wire');
            wire.dataset.id = i;

            wire.addEventListener('dragover', e => {
                if (wire.classList.contains('broken')) e.preventDefault();
            });
            wire.addEventListener('drop', e => {
                e.preventDefault();
                if (wire.classList.contains('broken')) fixWire(wire);
            });

            if (i < WIRES_PER_ROW) {
                row1.appendChild(wire);
            } else {
                row2.appendChild(wire);
            }
        }
        gamePanel.appendChild(row1);
        gamePanel.appendChild(row2);
    }
    
    function updateTimer() {
        if (!gameActive) return;
        timer--;
        timerDisplay.textContent = timer;

        if (timer <= 15 && !timerDisplay.classList.contains('low-time')) {
            timerDisplay.classList.add('low-time');
        }

        if (timer <= 0) {
            endGame(false);
        }
    }

    function scheduleNextWireBreak() {
        if (!gameActive) return;
        const randomInterval = Math.random() * 3000 + 1000;
        
        wireBreakTimeout = setTimeout(() => {
            breakRandomWire();
            scheduleNextWireBreak();
        }, randomInterval);
    }



    function breakRandomWire() {
        if (!gameActive) return;
        const availableWires = document.querySelectorAll('.wire:not(.broken)');
        if (availableWires.length === 0) return;

        const wireToBreak = availableWires[Math.floor(Math.random() * availableWires.length)];
        
        wireToBreak.classList.remove('fixed');
        wireToBreak.classList.add('broken');
        brokenWires++;
        brokenWiresCountDisplay.textContent = brokenWires;

        gamePanel.classList.add('panel-alert-flash');
        setTimeout(() => gamePanel.classList.remove('panel-alert-flash'), 350);
    }

    function fixWire(wire) {
        if (!gameActive) return;

        wire.classList.remove('broken');
        wire.classList.add('fixed');
        
        brokenWires--;
        brokenWiresCountDisplay.textContent = brokenWires;

        timer = Math.min(INITIAL_TIME, timer + 3);
        timerDisplay.textContent = timer;

        wiresFixedTotal++;
        wiresFixedTotalDisplay.textContent = `${wiresFixedTotal} / ${GOAL_TO_WIN}`;

        speakRandom(araraMessages.fixSuccess);

        if (wiresFixedTotal >= GOAL_TO_WIN) {
            endGame(true);
        }
    }

    function endGame(victory) {
        if (!gameActive) return;
        gameActive = false;
        clearInterval(timerInterval);
        clearTimeout(wireBreakTimeout);

        if (victory) {
            endGameTitle.textContent = "Vitória!";
            endGameMessage.textContent = `Você consertou ${GOAL_TO_WIN} fios e estabilizou o painel. Parabéns!`;
            speak(araraMessages.win);
        } else {
            endGameTitle.textContent = "Tempo Esgotado!";
            endGameMessage.textContent = `Você não atingiu a meta a tempo... Consertou ${wiresFixedTotal} de ${GOAL_TO_WIN} fios.`;
            speak(araraMessages.loseTime);
        }
        
        endGameModal.classList.remove('hidden');
    }

    restartButton.addEventListener('click', startGame);

    startGame();
});