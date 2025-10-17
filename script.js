document.addEventListener('DOMContentLoaded', () => {
    // --- Referências ao DOM ---
    const gameContainer = document.getElementById('game-container');
    const gamePanel = document.getElementById('electrical-panel');
    const timerDisplay = document.getElementById('timer');
    const wiresFixedTotalDisplay = document.getElementById('wires-fixed-total');
    const araraSprite = document.getElementById('arara-sprite');
    const araraSpeechBubble = document.getElementById('arara-speech-bubble');
    const tape = document.getElementById('tape');
    const endGameModal = document.getElementById('end-game-modal');
    const endGameTitle = document.getElementById('end-game-title');
    const finalScoreText = document.getElementById('final-score-text');
    const finalRatingText = document.getElementById('final-rating-text');
    const restartButton = document.getElementById('restart-button');

    // --- Variáveis de Controle do Jogo (Baseado no LDD) ---
    const TOTAL_WIRES_GOAL = 20;
    const INITIAL_TIME = 90;
    
    let timer;
    let timerInterval;
    let wiresFixedTotal = 0;
    let gameActive = false;
    let activeWires = 0;
    
    // --- Mensagens da Arara (Baseado no LDD) ---
    const araraMessages = {
        start: "Os fios da nave estão em curto! Use a fita isolante e evite um desastre!",
        correct: "Excelente! Um fio a menos em risco!",
        incorrect: "Cuidado! Toque errado pode causar choque!",
        goodJob: "Isso! Assim você impede o choque!",
        end: "Todos os fios foram isolados! Energia estabilizada. Você salvou a nave!"
    };

    // --- Lógica de Redimensionamento ---
    function resizeGame() {
        const scale = Math.min(window.innerWidth / 900, window.innerHeight / 800);
        gameContainer.style.transform = `scale(${scale})`;
    }
    window.addEventListener('resize', resizeGame);

    function speak(message) {
        araraSpeechBubble.textContent = message;
    }

    // --- Lógica Principal do Jogo ---
    function startGame() {
        resizeGame();
        
        gameActive = true;
        timer = INITIAL_TIME;
        wiresFixedTotal = 0;
        activeWires = 0;

        timerDisplay.textContent = timer;
        wiresFixedTotalDisplay.textContent = `${wiresFixedTotal} / ${TOTAL_WIRES_GOAL}`;
        timerDisplay.classList.remove('low-time');
        gamePanel.innerHTML = '';
        endGameModal.classList.add('hidden');
        gamePanel.style.filter = 'brightness(1)';

        speak(araraMessages.start);
        
        clearInterval(timerInterval);
        timerInterval = setInterval(updateTimer, 1000);
        
        // Inicia o jogo com a primeira etapa
        updateDifficulty(); 
    }

    function updateTimer() {
        if (!gameActive) return;

        timer--;
        timerDisplay.textContent = timer;

        if (timer <= 15 && !timerDisplay.classList.contains('low-time')) {
            timerDisplay.classList.add('low-time');
        }

        if (timer <= 0) {
            endGame();
        }
    }

    function getDifficultyStage() {
        if (wiresFixedTotal <= 3) return 1; // Etapa 1
        if (wiresFixedTotal <= 8) return 2; // Etapa 2
        if (wiresFixedTotal <= 14) return 3; // Etapa 3
        return 4; // Etapa 4
    }

    function updateDifficulty() {
        if (!gameActive) return;

        const stage = getDifficultyStage();
        let maxWires = 0;
        let spawnInterval = 0;

        switch (stage) {
            case 1: // Poucos fios, devagar
                maxWires = 3;
                spawnInterval = 3000;
                break;
            case 2: // Mais fios
                maxWires = 5;
                spawnInterval = 2500;
                break;
            case 3: // Fios mais rápidos
                maxWires = 7;
                spawnInterval = 1800;
                break;
            case 4: // Emergência
                maxWires = 10;
                spawnInterval = 1200;
                break;
        }

        if (activeWires < maxWires) {
            spawnWire();
        }

        setTimeout(updateDifficulty, spawnInterval);
    }
    
    function spawnWire() {
        if (!gameActive || wiresFixedTotal >= TOTAL_WIRES_GOAL) return;

        const wire = document.createElement('div');
        wire.classList.add('wire', 'broken');

        // Posição aleatória DENTRO do painel
        // Esses valores (15, 70, 20, 80) definem a área útil interna do painel
        const top = Math.random() * 55 + 15; // %
        const left = Math.random() * 60 + 20; // %
        wire.style.top = `${top}%`;
        wire.style.left = `${left}%`;
        
        wire.addEventListener('dragover', e => e.preventDefault());
        wire.addEventListener('drop', e => {
            e.preventDefault();
            fixWire(wire);
        });

        gamePanel.appendChild(wire);
        activeWires++;
    }

    function fixWire(wire) {
        if (!gameActive || !wire.classList.contains('broken')) return;

        wire.classList.remove('broken');
        wire.classList.add('fixed');
        activeWires--;
        
        wiresFixedTotal++;
        wiresFixedTotalDisplay.textContent = `${wiresFixedTotal} / ${TOTAL_WIRES_GOAL}`;
        
        timer = Math.min(INITIAL_TIME, timer + 5); // Adiciona +5s
        timerDisplay.textContent = timer;
        
        speak(araraMessages.correct);
        setTimeout(() => speak(araraMessages.goodJob), 2000);

        // Aumenta o brilho do painel
        let currentBrightness = parseFloat(gamePanel.style.filter.replace('brightness(', '') || 1);
        gamePanel.style.filter = `brightness(${Math.min(1, currentBrightness + 0.05)})`;

        if (wiresFixedTotal >= TOTAL_WIRES_GOAL) {
            endGame(); // Venceu ao atingir a meta
        }
    }

    function penalize() {
        if (!gameActive) return;

        timer -= 3; // Remove 3s
        timerDisplay.textContent = timer;
        
        gamePanel.classList.add('panel-error-flash');
        setTimeout(() => gamePanel.classList.remove('panel-error-flash'), 300);
        
        speak(araraMessages.incorrect);

        // Diminui o brilho do painel
        let currentBrightness = parseFloat(gamePanel.style.filter.replace('brightness(', '') || 1);
        gamePanel.style.filter = `brightness(${Math.max(0.3, currentBrightness - 0.1)})`;
    }

    function endGame() {
        if (!gameActive) return;
        gameActive = false;
        clearInterval(timerInterval);

        speak(araraMessages.end);

        // Avaliação por estrelas (Baseado no LDD)
        let rating = "";
        let stars = "";
        if (wiresFixedTotal <= 10) {
            rating = "Técnico Iniciante";
            stars = "⭐";
        } else if (wiresFixedTotal <= 16) {
            rating = "Técnico Responsável";
            stars = "⭐⭐";
        } else {
            rating = "Guardião da Nave";
            stars = "⭐⭐⭐";
        }
        
        finalScoreText.textContent = `Você reparou ${wiresFixedTotal} de ${TOTAL_WIRES_GOAL} fios!`;
        finalRatingText.textContent = `Pontuação: ${stars} (${rating})`;
        endGameModal.classList.remove('hidden');
    }

    // --- Event Listeners ---
    gamePanel.addEventListener('click', (e) => {
        if (e.target === gamePanel) {
            penalize();
        }
    });

    restartButton.addEventListener('click', startGame);

    // Início do Jogo
    startGame();
});