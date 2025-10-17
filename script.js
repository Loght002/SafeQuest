document.addEventListener('DOMContentLoaded', () => {
  // === SELETORES DE ELEMENTOS ===
  const gamePanel = document.getElementById('electrical-panel');
  const timerDisplay = document.getElementById('timer');
  const wiresFixedTotalDisplay = document.getElementById('wires-fixed-total');
  const araraSpeechBubble = document.getElementById('arara-speech-bubble');
  const endGameModal = document.getElementById('end-game-modal');
  const finalScoreText = document.getElementById('final-score-text');
  const finalRatingText = document.getElementById('final-rating-text');
  const restartButton = document.getElementById('restart-button');
  const tape = document.getElementById('tape');

  // === CRIAÇÃO DOS OBJETOS DE ÁUDIO ===
  const soundBackground = new Audio('Assets/sons/trilha-fundo.mp3');
  const soundTapeFix = new Audio('Assets/sons/som-de-fita.mp3');
  const soundSparks = new Audio('Assets/sons/faiscas-e-curtos.mp3');
  const soundAlarm = new Audio('Assets/sons/alarme-elétrico.mp3');
  const soundConclusion = new Audio('Assets/sons/musica-conclusao.mp3');
  
  // Configurações dos sons (volume, loop)
  soundBackground.loop = true;
  soundBackground.volume = 0.3;
  soundSparks.loop = true;
  soundSparks.volume = 0.5;
  soundAlarm.loop = true;
  soundAlarm.volume = 0.6;

  // === VARIÁVEIS DO JOGO ===
  const TOTAL_WIRES_GOAL = 20;
  const INITIAL_TIME = 90;

  let timer = INITIAL_TIME;
  let timerInterval;
  let wiresFixedTotal = 0;
  let gameActive = false;
  let wires = [];
  let isAlarmPlaying = false; // Flag para controlar o alarme

  const araraMessages = {
    start: "Arraste a fita isolante até os fios em curto para consertá-los!",
    correct: "Excelente! Um fio a menos em risco!",
    goodJob: "Isso! Continue assim!",
    end: "Todos os fios foram isolados! Energia estabilizada. Você salvou a nave!"
  };
  
  // === FUNÇÕES DE CONTROLE DE SOM ===
  function stopAllSounds() {
    soundBackground.pause();
    soundSparks.pause();
    soundAlarm.pause();
    soundConclusion.pause();
  }
  
  function playSound(sound) {
      sound.currentTime = 0;
      sound.play();
  }

  // === FUNÇÕES PRINCIPAIS DO JOGO ===
  function speak(msg) {
    araraSpeechBubble.textContent = msg;
  }

  function startGame() {
    gameActive = true;
    timer = INITIAL_TIME;
    wiresFixedTotal = 0;
    wiresFixedTotalDisplay.textContent = `0 / ${TOTAL_WIRES_GOAL}`;
    timerDisplay.textContent = timer;
    timerDisplay.classList.remove('low-time');
    endGameModal.classList.add('hidden');
    gamePanel.innerHTML = '';
    speak(araraMessages.start);

    // Controle de som no início
    stopAllSounds();
    soundBackground.play().catch(e => console.log("Interação do usuário necessária para tocar música."));
    isAlarmPlaying = false;

    createWires();
    breakRandomWire();
    clearInterval(timerInterval);
    timerInterval = setInterval(updateTimer, 1000);
  }

  function updateTimer() {
    if (!gameActive) return;
    timer--;
    timerDisplay.textContent = timer;
    if (timer <= 15) {
      timerDisplay.classList.add('low-time');
      // Toca o alarme apenas uma vez
      if (!isAlarmPlaying) {
        soundAlarm.play();
        isAlarmPlaying = true;
      }
    }
    if (timer <= 0) {
      endGame();
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
    
    // Toca o som de faísca se ainda não estiver tocando
    if (soundSparks.paused) {
        soundSparks.play();
    }

    randomWire.addEventListener('dragover', handleDragOver);
    randomWire.addEventListener('dragleave', handleDragLeave);
    randomWire.addEventListener('drop', handleDrop);

    const nextTime = Math.random() * 2000 + 2000;
    setTimeout(breakRandomWire, nextTime);
  }

  function fixWire(wire) {
    if (!gameActive || !wire.classList.contains('broken')) return;
    
    // Toca o som da fita
    playSound(soundTapeFix);

    wire.classList.remove('broken');
    wire.classList.add('fixed');
    
    wire.removeEventListener('dragover', handleDragOver);
    wire.removeEventListener('dragleave', handleDragLeave);
    wire.removeEventListener('drop', handleDrop);

    // Para o som de faísca se não houver mais fios quebrados
    const brokenWires = wires.filter(w => w.classList.contains('broken'));
    if (brokenWires.length === 0) {
        soundSparks.pause();
    }

    wiresFixedTotal++;
    wiresFixedTotalDisplay.textContent = `${wiresFixedTotal} / ${TOTAL_WIRES_GOAL}`;
    timer = Math.min(INITIAL_TIME, timer + 5);
    speak(araraMessages.correct);
    setTimeout(() => speak(araraMessages.goodJob), 1500);

    if (wiresFixedTotal >= TOTAL_WIRES_GOAL) endGame();
  }
  
  function endGame() {
    gameActive = false;
    clearInterval(timerInterval);
    speak(araraMessages.end);
    
    // Para todos os sons do jogo e toca a música de conclusão
    stopAllSounds();
    playSound(soundConclusion);

    let rating, stars;
    if (wiresFixedTotal <= 10) { rating = "Técnico Iniciante"; stars = "⭐"; } 
    else if (wiresFixedTotal <= 16) { rating = "Técnico Responsável"; stars = "⭐⭐"; } 
    else { rating = "Guardião da Nave"; stars = "⭐⭐⭐"; }
    
    finalScoreText.textContent = `Você reparou ${wiresFixedTotal} de ${TOTAL_WIRES_GOAL} fios!`;
    finalRatingText.textContent = `Pontuação: ${stars} (${rating})`;
    endGameModal.classList.remove('hidden');
  }

  // === EVENT LISTENERS ===
  tape.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text/plain', 'tape');
  });

  function handleDragOver(e) {
    e.preventDefault();
    this.classList.add('drag-over');
  }
  
  function handleDragLeave() {
    this.classList.remove('drag-over');
  }

  function handleDrop(e) {
    e.preventDefault();
    this.classList.remove('drag-over');
    if (e.dataTransfer.getData('text/plain') === 'tape') {
      fixWire(this);
    }
  }

  restartButton.addEventListener('click', startGame);
  
  // Inicia o jogo
  startGame();
});