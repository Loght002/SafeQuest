// --- DICIONÁRIO DE IDIOMAS ---
const languages = {
    'pt': { name: 'Português', key: 'pt' },
    'en': { name: 'English', key: 'en' },
    'es': { name: 'Español', key: 'es' }
};

const langData = {
    'pt': {
        titulo_principal: "Safe Quest",
        settings_title: "Configurações",
        music_on: "Música: LIGADA",
        music_off: "Música: DESLIGADA",
        sfx_on: "Efeitos Sonoros: LIGADOS",
        sfx_off: "Efeitos: DESLIGADOS",
        idioma_label: "Idioma",
        modo_cor_label: "Modo de Cor",
        cor_padrao: "Padrão",
<<<<<<< HEAD
        cor_alto_contraste: "TEA",
=======
        cor_alto_contraste: "Alto Contraste",
>>>>>>> 1e29ed259d7cfc1a081e9058b6deb5b2e2b2d9e8
        cor_daltonismo: "Daltonismo",
        btn_fechar: "Fechar",
        selecionar_fase_titulo: "Selecionar Fase",
        fase_label: "Fase",
<<<<<<< HEAD
        voltar_menu: "Voltar",

        // 👇 ADICIONE ESTAS NOVAS CHAVES 👇
        fase1_titulo: "COMO MONTAR CESTAS DE SUPRIMENTOS",
        fase2_titulo: "SEPARAÇÃO DO LIXO",
        fase3_titulo: "CUIDADO COM OS FIOS!"
=======
        voltar_menu: "Voltar"
>>>>>>> 1e29ed259d7cfc1a081e9058b6deb5b2e2b2d9e8
    },
    'en': {
        titulo_principal: "Safe Quest",
        settings_title: "Settings",
        music_on: "Music: ON",
        music_off: "Music: OFF",
        sfx_on: "Sound Effects: ON",
        sfx_off: "Sound Effects: OFF",
        idioma_label: "Language",
        modo_cor_label: "Color Mode",
        cor_padrao: "Default",
<<<<<<< HEAD
        cor_alto_contraste: "ASD",
=======
        cor_alto_contraste: "High Contrast",
>>>>>>> 1e29ed259d7cfc1a081e9058b6deb5b2e2b2d9e8
        cor_daltonismo: "Colorblind Safe",
        btn_fechar: "Close",
        selecionar_fase_titulo: "Select Level",
        fase_label: "Level",
<<<<<<< HEAD
        voltar_menu: "Back",

        // 👇 ADICIONE ESTAS NOVAS CHAVES (tradução de exemplo) 👇
        fase1_titulo: "HOW TO ASSEMBLE SUPPLY BASKETS",
        fase2_titulo: "WASTE SEPARATION",
        fase3_titulo: "BEWARE OF WIRES!"
=======
        voltar_menu: "Back"
>>>>>>> 1e29ed259d7cfc1a081e9058b6deb5b2e2b2d9e8
    },
    'es': {
        titulo_principal: "Safe Quest",
        settings_title: "Configuración",
        music_on: "Música: ENCENDIDA",
        music_off: "Música: APAGADA",
        sfx_on: "Efectos de Sonido: ENCENDIDOS",
        sfx_off: "Efectos: APAGADOS",
        idioma_label: "Idioma",
        modo_cor_label: "Modo de Color",
        cor_padrao: "Estándar",
<<<<<<< HEAD
        cor_alto_contraste: "TEA",
=======
        cor_alto_contraste: "Alto Contraste",
>>>>>>> 1e29ed259d7cfc1a081e9058b6deb5b2e2b2d9e8
        cor_daltonismo: "Daltónico",
        btn_fechar: "Cerrar",
        selecionar_fase_titulo: "Seleccionar Nivel",
        fase_label: "Nivel",
<<<<<<< HEAD
        voltar_menu: "Volver",

        // 👇 ADICIONE ESTAS NOVAS CHAVES (tradução de exemplo) 👇
        fase1_titulo: "CÓMO ARMAR CESTAS DE SUMINISTROS",
        fase2_titulo: "SEPARACIÓN DE RESIDUOS",
        fase3_titulo: "¡CUIDADO CON LOS CABLES!"
=======
        voltar_menu: "Volver"
>>>>>>> 1e29ed259d7cfc1a081e9058b6deb5b2e2b2d9e8
    }
};
const languageKeys = Object.keys(languages);

// --- SELETORES DE ELEMENTOS ---
const body = document.body;
const gameTitle = document.querySelector('.game-title'); 

// Elementos do Menu Principal e Seleção de Fase
const mainMenu = document.getElementById('main-menu');
const levelSelectContainer = document.getElementById('level-select-container');
const playButton = document.getElementById('play-button');
const backToMenuButton = document.getElementById('back-to-menu-button');
const levelButtons = document.querySelectorAll('.level-button');

// Elementos do Modal de Configurações
const settingsButton = document.getElementById('settings-button');
const settingsModal = document.getElementById('settings-modal');
const settingsOverlay = document.getElementById('settings-overlay');
const closeSettingsButton = document.getElementById('close-settings-button');
const colorModeButtons = document.querySelectorAll('.color-mode-btn');
const musicToggleButton = document.getElementById('music-toggle-button');
const sfxToggleButton = document.getElementById('sfx-toggle-button');
const languageToggleButton = document.getElementById('language-toggle-button'); 
const settingsTitle = document.querySelector('.settings-title');
const colorModeLabel = document.getElementById('color-mode-label');

// --- ÁUDIO ---
const menuMusic = new Audio('assets/musica-menu.mp3');
menuMusic.loop = true;
<<<<<<< HEAD
menuMusic.volume = 1.0;
=======
menuMusic.volume = 0.5;
>>>>>>> 1e29ed259d7cfc1a081e9058b6deb5b2e2b2d9e8

const clickSound = new Audio('assets/clique-ui.mp3');
clickSound.volume = 0.7;

// --- ESTADO GLOBAL COM CONFIGURAÇÕES ---
let settings = {
    music: true,
    sfx: true,
    language: 'pt',
    colorMode: 'default'
};
let hasUserInteracted = false;

// --- FUNÇÕES DE ÁUDIO ---
function playClickSound() {
    if (settings.sfx) {
        clickSound.currentTime = 0;
        clickSound.play();
    }
}

// --- FUNÇÕES DE CONFIGURAÇÃO ---
function saveSettings() {
    localStorage.setItem('safequest-settings', JSON.stringify(settings));
}

function loadSettings() {
    const savedSettings = JSON.parse(localStorage.getItem('safequest-settings'));
    if (savedSettings) {
        settings = { ...settings, ...savedSettings }; 
    }
    
    if (!settings.music) {
        menuMusic.pause();
    }

    updateConfigUI();
}

function updateTexts() {
    const currentLang = settings.language;
    const texts = langData[currentLang];
    
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        if (texts[key]) {
            if (key === 'fase_label') {
                element.textContent = texts[key];
            } else {
                element.textContent = texts[key];
            }
        }
    });

    document.title = texts.titulo_principal;

    musicToggleButton.textContent = settings.music ? texts.music_on : texts.music_off;
    sfxToggleButton.textContent = settings.sfx ? texts.sfx_on : texts.sfx_off;
    
    const currentLangName = languages[currentLang].name;
    const languageLabel = texts.idioma_label;
    languageToggleButton.textContent = `${languageLabel}: ${currentLangName}`;
}


function updateConfigUI() {
    body.classList.remove('high-contrast', 'colorblind-safe');
    if (settings.colorMode !== 'default') {
        body.classList.add(settings.colorMode);
    }
    colorModeButtons.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.mode === settings.colorMode);
    });
    
    updateTexts();
}

// --- FUNÇÕES DE NAVEGAÇÃO ENTRE TELAS ---

playButton.addEventListener('click', () => {
    playButton.classList.add('clicked');
    
    setTimeout(() => {
        mainMenu.classList.add('hidden');
        levelSelectContainer.classList.remove('hidden');
        playButton.classList.remove('clicked');
    }, 400); 
});

backToMenuButton.addEventListener('click', () => {
    levelSelectContainer.classList.add('hidden');
    mainMenu.classList.remove('hidden');
});

levelButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.classList.contains('locked')) {
            console.log("Fase bloqueada!");
            return;
        }
        const level = button.dataset.level;
        console.log(`Iniciando fase ${level}...`);
        
        window.location.href = `../fase${level}/index.html`; 
    });
});

// --- FUNÇÕES DO MODAL DE CONFIGURAÇÕES ---
function openSettings() {
    settingsModal.classList.remove('hidden');
    settingsOverlay.classList.remove('hidden');
}

function closeSettings() {
    settingsModal.classList.add('hidden');
    settingsOverlay.classList.add('hidden');
    saveSettings();
}

settingsButton.addEventListener('click', openSettings);
closeSettingsButton.addEventListener('click', closeSettings);
settingsOverlay.addEventListener('click', closeSettings);

musicToggleButton.addEventListener('click', () => {
    settings.music = !settings.music;
    
    if (settings.music) {
        if(hasUserInteracted) {
             menuMusic.play();
        }
    } else {
        menuMusic.pause();
    }
    
    updateConfigUI();
});

sfxToggleButton.addEventListener('click', () => {
    settings.sfx = !settings.sfx;
    updateConfigUI();
});

languageToggleButton.addEventListener('click', () => {
    let currentIndex = languageKeys.indexOf(settings.language);
    currentIndex = (currentIndex + 1) % languageKeys.length;
    settings.language = languageKeys[currentIndex];
    updateConfigUI();
});

colorModeButtons.forEach(button => {
    button.addEventListener('click', () => {
        settings.colorMode = button.dataset.mode;
        updateConfigUI();
    });
});

// --- INICIALIZAÇÃO ---

document.body.addEventListener('click', (e) => {
    
    if (e.target.closest('button')) {
        playClickSound();
    }

    if (!hasUserInteracted) {
        hasUserInteracted = true;
        if (settings.music) {
            menuMusic.play().catch(error => {
                console.warn("Autoplay da música bloqueado pelo navegador.", error);
            });
        }
    }
});


loadSettings();