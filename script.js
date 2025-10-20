document.addEventListener('DOMContentLoaded', () => {

    // --- DICIONÁRIO DE IDIOMAS (I18N) ---
    const fase3LangData = {
        'pt': {
            titulo_pagina: "SafeQuest - Fase 3: Cuidado com os Fios!",
            titulo_h1: "SafeQuest",
            titulo_h2: "Fase: Reparo Elétrico",
            intro_p: "A energia da nave está instável! Arraste a fita isolante para consertar os fios expostos antes que o tempo acabe.",
            btn_comecar: "Começar Jogo!",
            fios_consertados: "Fios Consertados:",
            label_tempo: "TEMPO:",
            label_fita: "Fita Isolante",
            btn_reiniciar: "Jogar Novamente",
            // Mensagens da Arara
            msg_start: "Arraste a fita isolante até os fios em curto para consertá-los!",
            msg_correct: "Excelente! Um fio a menos em risco!",
            msg_goodJob: "Isso! Continue assim!",
            msg_miss: "Cuidado! Tente acertar o fio.",
            msg_end_win: "Todos os fios foram isolados! Energia estabilizada. Você salvou a nave!",
            msg_end_time: "O tempo acabou, mas você fez um ótimo trabalho de contenção!",
            // Fim de jogo
            end_title_win: "Energia Estabilizada!",
            end_title_timeup: "Tempo Esgotado!",
            end_score: "Você reparou",
            end_score_of: "de",
            end_score_wires: "fios!",
            end_rating: "Pontuação:",
            rating_1: "Técnico Iniciante",
            rating_2: "Técnico Responsável",
            rating_3: "Guardião da Nave"
        },
        'en': {
            // --- Traduções em Inglês (Exemplo) ---
            titulo_pagina: "SafeQuest - Stage 3: Watch the Wires!",
            titulo_h1: "SafeQuest",
            titulo_h2: "Stage: Electrical Repair",
            intro_p: "The ship's power is unstable! Drag the electrical tape to fix the exposed wires before time runs out.",
            btn_comecar: "Start Game!",
            fios_consertados: "Wires Fixed:",
            label_tempo: "TIME:",
            label_fita: "Electrical Tape",
            btn_reiniciar: "Play Again",
            msg_start: "Drag the electrical tape to the shorted wires to fix them!",
            msg_correct: "Excellent! One less wire at risk!",
            msg_goodJob: "That's it! Keep it up!",
            msg_miss: "Careful! Try to hit the wire.",
            msg_end_win: "All wires insulated! Power stabilized. You saved the ship!",
            msg_end_time: "Time's up, but you did a great containment job!",
            end_title_win: "Power Stabilized!",
            end_title_timeup: "Time's Up!",
            end_score: "You repaired",
            end_score_of: "of",
            end_score_wires: "wires!",
            end_rating: "Rating:",
            rating_1: "Rookie Technician",
            rating_2: "Responsible Technician",
            rating_3: "Ship Guardian"
        },
        'es': {
            // --- Traduções em Espanhol (Exemplo) ---
            titulo_pagina: "SafeQuest - Fase 3: ¡Cuidado con los Cables!",
            titulo_h1: "SafeQuest",
            titulo_h2: "Fase: Reparación Eléctrica",
            intro_p: "¡La energía de la nave es inestable! Arrastra la cinta aislante para arreglar los cables expuestos antes de que se acabe el tiempo.",
            btn_comecar: "¡Empezar Juego!",
            fios_consertados: "Cables Arreglados:",
            label_tempo: "TIEMPO:",
            label_fita: "Cinta Aislante",
            btn_reiniciar: "Jugar de Nuevo",
            msg_start: "¡Arrastra la cinta aislante a los cables en corto para arreglarlos!",
            msg_correct: "¡Excelente! ¡Un cable menos en riesgo!",
            msg_goodJob: "¡Eso! ¡Sigue así!",
            msg_miss: "¡Cuidado! Intenta acertar el cable.",
            msg_end_win: "¡Todos los cables aislados! Energía estabilizada. ¡Salvaste la nave!",
            msg_end_time: "¡Se acabó el tiempo, pero hiciste un gran trabajo de contención!",
            end_title_win: "¡Energía Estabilizada!",
            end_title_timeup: "¡Tiempo Agotado!",
            end_score: "¡Reparaste",
            end_score_of: "de",
            end_score_wires: "cables!",
            end_rating: "Puntuación:",
            rating_1: "Técnico Novato",
            rating_2: "Técnico Responsable",
            rating_3: "Guardián de la Nave"
        }
    };

    // --- PALETAS DE SPRITES (ACESSIBILIDADE) ---
    // Baseado nos nomes de arquivos da sua captura de tela
    const spritePalettes = {
        'default': {
            panel: "url('Assets/Painel elétrico interno - cor padrão.png')",
            tape: "url('Assets/Fita isolante - cor padrão.png')",
            // --- CORREÇÃO AQUI ---
            wire_fixed: "url('Assets/fio concertado .png')", // Usando o arquivo com 'c' e espaço
            // --- FIM DA CORREÇÃO ---
            wire_broken: "url('Assets/fio faiscado - cor padrão.png')",
            scientist_default: "Assets/Espressão do cientista - Cor padrão.png"
        },
        'high-contrast': { // Mapeado para TEA / Autismo
            panel: "url('Assets/Painel elétrico interno - TEA.png')",
            tape: "url('Assets/Fita isolante - TEA.png')",
            wire_fixed: "url('Assets/fio concertado tea .png')", 
            wire_broken: "url('Assets/fio faiscado autismo .png')",
            scientist_default: null // Usará o 'default' como fallback
        },
        'colorblind-safe': { // Mapeado para Daltonismo
            panel: "url('Assets/Painel elétrico interno - cor padrão - Daltonismo.png')",
            tape: "url('Assets/Fita isolante - Daltonismo .png')",
            wire_fixed: "url('Assets/fio concertado- Daltonismo.png')",
            wire_broken: "url('Assets/fio faiscado - Daltônico .png')",
            scientist_default: "Assets/Espressão do cientista - Daltonismo.png"
        }
    };

    // --- GERENCIADOR DE ACESSIBILIDADE ---
    const AccessibilityManager = {
        currentPaletteName: 'default',
        currentPalette: spritePalettes['default'],

        setPalette: function(paletteName) {
            if (!spritePalettes[paletteName]) {
                console.warn(`Paleta "${paletteName}" não encontrada. Usando padrão.`);
                paletteName = 'default';
            }
            this.currentPaletteName = paletteName;
            this.currentPalette = spritePalettes[paletteName];
            console.log(`Modo de cor de sprites definido para: ${paletteName}`);
        },

        getSprite: function(spriteKey) {
            const sprite = this.currentPalette[spriteKey] || spritePalettes['default'][spriteKey];
            if (!sprite) console.error(`Sprite "${spriteKey}" não encontrado em 'default'`);
            return sprite;
        },

        updateUISprites: function() {
            // 1. Atualiza a Arara (que é uma tag <img>)
            const scientistSprite = document.getElementById('scientist-sprite');
            if (scientistSprite) {
                scientistSprite.src = this.getSprite('scientist_default');
            }

            // 2. Atualiza as Variáveis CSS (para painel, fios, fita)
            const root = document.documentElement;
            root.style.setProperty('--sprite-panel', this.getSprite('panel'));
            root.style.setProperty('--sprite-tape', this.getSprite('tape'));
            root.style.setProperty('--sprite-fio-fixed', this.getSprite('wire_fixed'));
            root.style.setProperty('--sprite-fio-broken', this.getSprite('wire_broken'));
        }
    };

    // === VARIÁVEIS GLOBAIS DE CONFIGURAÇÃO E SOM ===
    let settings = { music: true, sfx: true, language: 'pt', colorMode: 'default' };
    let sounds = {};
    let audioInitialized = false;
    let araraMessages = {}; 

    // === FUNÇÕES DE CONFIGURAÇÃO E TRADUÇÃO ===
    function loadSettings() {
        const savedSettings = JSON.parse(localStorage.getItem('safequest-settings'));
        if (savedSettings) {
            settings = { ...settings, ...savedSettings };
        }

        const gameContainer = document.getElementById('game-container');
        if (gameContainer) {
            gameContainer.dataset.colorMode = settings.colorMode;
        }
        AccessibilityManager.setPalette(settings.colorMode);
        AccessibilityManager.updateUISprites(); 

        updateTexts(); 
    }

    function updateTexts() {
        const texts = fase3LangData[settings.language] || fase3LangData['pt'];

        document.title = texts.titulo_pagina;

        // Tela Inicial (Start Screen)
        document.querySelector('#start-screen h1').textContent = texts.titulo_h1;
        document.querySelector('#start-screen h2').textContent = texts.titulo_h2;
        document.querySelector('#start-screen p').textContent = texts.intro_p;
        document.getElementById('start-button').textContent = texts.btn_comecar;

        // UI do Jogo
        document.querySelector('#score-container p').firstChild.textContent = texts.fios_consertados + " ";
        document.querySelector('#timer-container span:first-child').textContent = texts.label_tempo;
        document.querySelector('#tape-container p').textContent = texts.label_fita;

        // Tela Final (End Game)
        document.getElementById('restart-button').textContent = texts.btn_reiniciar;

        // Populando o objeto de mensagens do cientista
        scientistMessages = {
            start: texts.msg_start,
            correct: texts.msg_correct,
            goodJob: texts.msg_goodJob,
            miss: texts.msg_miss,
            end_win: texts.msg_end_win,
            end_time: texts.msg_end_time
        };
        
        if (scientistSpeechBubble) {
            scientistSpeechBubble.textContent = scientistMessages.start;
        }
    }

    // === SELETORES DE ELEMENTOS ===
    const gamePanel = document.getElementById('electrical-panel');
    const timerDisplay = document.getElementById('timer');
    const wiresFixedTotalDisplay = document.getElementById('wires-fixed-total');
    const scientistSpeechBubble = document.getElementById('scientist-speech-bubble');
    const endGameModal = document.getElementById('end-game-modal');
    const endGameTitle = document.getElementById('end-game-title'); 
    const finalScoreText = document.getElementById('final-score-text');
    const finalRatingText = document.getElementById('final-rating-text');
    const restartButton = document.getElementById('restart-button');
    const tape = document.getElementById('tape');
    const startScreen = document.getElementById('start-screen');
    const startButton = document.getElementById('start-button');

    // === FUNÇÕES DE ÁUDIO ===
    function initAudio() {
        if (audioInitialized) return;
        sounds = {
            // O caminho 'Assets/sons/' assume que 'index.html' está em 'fase3/'
            // e 'sons' está em 'fase3/Assets/'
            'background': new Audio('Assets/sons/trilha-fundo.mp3'),
            'tapeFix': new Audio('Assets/sons/som-de-fita.mp3'),
            'sparks': new Audio('Assets/sons/faiscas-e-curtos.mp3'),
            'alarm': new Audio('Assets/sons/alarme-elétrico.mp3'),
            'conclusion': new Audio('Assets/sons/musica-conclusao.mp3'),
            'error': new Audio('Assets/sons/som-de-erro.mp3')
        };

        sounds.background.loop = true;
        sounds.background.volume = 0.3;
        sounds.sparks.loop = true;
        sounds.sparks.volume = 0.5;
        sounds.alarm.loop = true;
        sounds.alarm.volume = 0.6;
        sounds.error.volume = 0.7;
        audioInitialized = true;
    }
    
    function playSound(name) {
        if (!audioInitialized || !sounds[name] || !settings.sfx) return;
        sounds[name].currentTime = 0;
        sounds[name].play().catch(e => console.warn(`Erro ao tocar ${name}:`, e));
    }

    function stopSound(name) {
        if (!audioInitialized || !sounds[name]) return;
        sounds[name].pause();
        sounds[name].currentTime = 0;
    }

    function startBackgroundMusic() {
        if (!audioInitialized || !settings.music) return;
        sounds.background.currentTime = 0;
        sounds.background.play().catch(e => console.log("Interação necessária para música."));
    }

    function stopAllSounds() {
        if (!audioInitialized) return;
        for (let key in sounds) {
            sounds[key].pause();
            sounds[key].currentTime = 0;
        }
    }

    // === VARIÁVEIS DO JOGO ===
    const TOTAL_WIRES_GOAL = 25;
    const INITIAL_TIME = 90;
    const TIME_PENALTY = 3;
    const TIME_BONUS = 5;
    const BREAK_INTERVAL = 3500;

    let timer = INITIAL_TIME;
    let timerInterval;
    let wireBreakInterval;
    let wiresFixedTotal = 0;
    let gameActive = false;
    let wires = [];
    let isAlarmPlaying = false;
    
    // === FUNÇÕES PRINCIPAIS DO JOGO ===
    function speak(msg) {
        scientistSpeechBubble.textContent = msg;
    }

    function startGame() {
        gameActive = true;
        timer = INITIAL_TIME;
        wiresFixedTotal = 0;
        wiresFixedTotalDisplay.textContent = `0`;
        timerDisplay.textContent = timer;
        timerDisplay.classList.remove('low-time');
        endGameModal.classList.add('hidden');
        gamePanel.innerHTML = '';
        speak(scientistMessages.start); 

        gamePanel.addEventListener('dragover', handlePanelDragOver);
        gamePanel.addEventListener('drop', handlePanelDrop);

        stopAllSounds();
        startBackgroundMusic(); 
        isAlarmPlaying = false;

        createWires();
        
        clearInterval(timerInterval);
        clearInterval(wireBreakInterval);
        timerInterval = setInterval(updateTimer, 1000);
        wireBreakInterval = setInterval(breakRandomWire, BREAK_INTERVAL);
    }

    function updateTimer() {
        if (!gameActive) return;

        timerDisplay.textContent = timer;

        if (timer <= 0) {
            endGame(false); 
            return;
        }
        
        timer--;

        if (timer <= 15 && timer > 0) {
            timerDisplay.classList.add('low-time');
            if (!isAlarmPlaying) {
                playSound('alarm'); 
                isAlarmPlaying = true;
            }
        } else if (timer > 15 && isAlarmPlaying) {
            stopSound('alarm'); 
            isAlarmPlaying = false;
            timerDisplay.classList.remove('low-time');
        }
    }

    function createWires() {
        wires = [];
        const rows = 2;
        const cols = 5;
        const spacingX = 9.8;
        const spacingY = 33;
        const startingTop = 18;
        const totalWiresWidth = cols * spacingX;
        const startingLeft = (100 - totalWiresWidth) / 2;

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                const wire = document.createElement('div');
                wire.classList.add('wire', 'fixed');
                wire.style.top = `${startingTop + r * spacingY}%`;
                wire.style.left = `${startingLeft + c * spacingX}%`;
                gamePanel.appendChild(wire);
                wires.push(wire);
            }
        }
    }

    function breakRandomWire() {
        if (!gameActive) return;
        
        const fixedWires = wires.filter(w => w.classList.contains('fixed'));
        if (fixedWires.length === 0) return;

        const randomWire = fixedWires[Math.floor(Math.random() * fixedWires.length)];
        randomWire.classList.remove('fixed');
        randomWire.classList.add('broken');
        
        if (settings.sfx && sounds.sparks.paused) {
            playSound('sparks');
        }

        randomWire.addEventListener('dragover', handleDragOver);
        randomWire.addEventListener('dragleave', handleDragLeave);
        randomWire.addEventListener('drop', handleDropOnWire);
    }

    function fixWire(wire) {
        if (!gameActive || !wire.classList.contains('broken')) return;
        
        playSound('tapeFix');

        wire.classList.remove('broken');
        wire.classList.add('fixed');
        
        wire.removeEventListener('dragover', handleDragOver);
        wire.removeEventListener('dragleave', handleDragLeave);
        wire.removeEventListener('drop', handleDropOnWire);

        const brokenWires = wires.filter(w => w.classList.contains('broken'));
        if (brokenWires.length === 0) {
            stopSound('sparks');
        }

        wiresFixedTotal++;
        
        wiresFixedTotalDisplay.textContent = `${wiresFixedTotal}`;
        timer += TIME_BONUS;
        timerDisplay.textContent = timer; 
        speak(scientistMessages.correct);
        setTimeout(() => speak(scientistMessages.goodJob), 1500);

        if (wiresFixedTotal >= TOTAL_WIRES_GOAL) {
            endGame(true); 
        }
    }
    
    function endGame(didWin) {
        gameActive = false;
        clearInterval(timerInterval);
        clearInterval(wireBreakInterval); 
        
        speak(didWin ? scientistMessages.end_win : scientistMessages.end_time);
        
        gamePanel.removeEventListener('dragover', handlePanelDragOver);
        gamePanel.removeEventListener('drop', handlePanelDrop);

        stopAllSounds();
        playSound('conclusion');
        
        const texts = fase3LangData[settings.language] || fase3LangData['pt'];
        let rating, stars;

        if (wiresFixedTotal <= 10) { 
            rating = texts.rating_1; stars = "⭐"; 
        } else if (wiresFixedTotal <= 20) { 
            rating = texts.rating_2; stars = "⭐⭐"; 
        } else { 
            rating = texts.rating_3; stars = "⭐⭐⭐"; 
        }
        
        endGameTitle.textContent = didWin ? texts.end_title_win : texts.end_title_timeup;
        
        finalScoreText.textContent = `${texts.end_score} ${wiresFixedTotal} ${texts.end_score_of} ${TOTAL_WIRES_GOAL} ${texts.end_score_wires}`;
        finalRatingText.textContent = `${texts.end_rating} ${stars} (${rating})`;
        endGameModal.classList.remove('hidden');
    }

    // === EVENT LISTENERS (DRAG & DROP) ===
    tape.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', 'tape');
    });

    // --- CORREÇÃO AQUI (REMOVIDO O "G" EXTRA) ---
    function handleDragOver(e) {
        e.preventDefault();
        this.classList.add('drag-over');
    }
    // --- FIM DA CORREÇÃO ---
    
    function handleDragLeave() {
        this.classList.remove('drag-over');
    }

    function handleDropOnWire(e) {
        e.preventDefault();
        e.stopPropagation();
        
        this.classList.remove('drag-over');
        if (e.dataTransfer.getData('text/plain') === 'tape') {
            fixWire(this);
        }
    }

    function handlePanelDragOver(e) {
        e.preventDefault();
    }

    function handlePanelDrop(e) {
        if (!gameActive) return;
        e.preventDefault();
        
        timer = Math.max(0, timer - TIME_PENALTY);
        timerDisplay.textContent = timer; 
        speak(scientistMessages.miss);
        playSound('error');
    }

    // === EVENT LISTENERS (BOTÕES) ===
    startButton.addEventListener('click', () => {
        initAudio(); // Inicializa os sons no primeiro clique
        startScreen.classList.add('hidden');
        startGame();
    });
    
    restartButton.addEventListener('click', startGame);

    // --- INICIALIZAÇÃO ---
    loadSettings(); // Carrega idioma e modo de cor imediatamente
});