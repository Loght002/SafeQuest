document.addEventListener('DOMContentLoaded', () => {
  const gamePanel = document.getElementById('electrical-panel');
  const timerDisplay = document.getElementById('timer');
  const wiresFixedTotalDisplay = document.getElementById('wires-fixed-total');
  const araraSpeechBubble = document.getElementById('arara-speech-bubble');
  const endGameModal = document.getElementById('end-game-modal');
  const finalScoreText = document.getElementById('final-score-text');
  const finalRatingText = document.getElementById('final-rating-text');
  const restartButton = document.getElementById('restart-button');

  const TOTAL_WIRES_GOAL = 20;
  const INITIAL_TIME = 90;

  let timer = INITIAL_TIME;
  let timerInterval;
  let wiresFixedTotal = 0;
  let gameActive = false;
  let wires = [];

  const araraMessages = {
    start: "Os fios da nave estão em curto! Use a fita isolante e evite um desastre!",
    correct: "Excelente! Um fio a menos em risco!",
    incorrect: "Cuidado! Toque errado pode causar choque!",
    goodJob: "Isso! Assim você impede o choque!",
    end: "Todos os fios foram isolados! Energia estabilizada. Você salvou a nave!"
  };

  function speak(msg) {
    araraSpeechBubble.textContent = msg;
  }

  function startGame() {
    gameActive = true;
    timer = INITIAL_TIME;
    wiresFixedTotal = 0;
    wiresFixedTotalDisplay.textContent = `0 / ${TOTAL_WIRES_GOAL}`;
    timerDisplay.textContent = timer;
    endGameModal.classList.add('hidden');
    gamePanel.innerHTML = '';
    speak(araraMessages.start);

    createWires();
    breakRandomWire();
    clearInterval(timerInterval);
    timerInterval = setInterval(updateTimer, 1000);
  }

  function updateTimer() {
    if (!gameActive) return;
    timer--;
    timerDisplay.textContent = timer;
    if (timer <= 15) timerDisplay.classList.add('low-time');
    if (timer <= 0) endGame();
  }

  // === Cria as duas fileiras de fios ===
  function createWires() {
    const rows = 2;
    const cols = 10;
    const spacingX = 2; // espaçamento percentual horizontal
    const spacingY = 35; // altura das duas linhas

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const wire = document.createElement('div');
        wire.classList.add('wire', 'fixed');
        wire.style.top = `${20 + r * spacingY}%`;
        wire.style.left = `${10 + c * spacingX}%`;
        wire.dataset.row = r;
        wire.dataset.col = c;
        gamePanel.appendChild(wire);
        wires.push(wire);
      }
    }
  }

  // === Escolhe um fio aleatório e o "quebra" ===
  function breakRandomWire() {
    if (!gameActive) return;

    const fixedWires = wires.filter(w => w.classList.contains('fixed'));
    if (fixedWires.length === 0) return;

    const randomWire = fixedWires[Math.floor(Math.random() * fixedWires.length)];
    randomWire.classList.remove('fixed');
    randomWire.classList.add('broken');

    randomWire.addEventListener('click', () => fixWire(randomWire), { once: true });

    // Próximo fio quebrará aleatoriamente após 2~4s
    const nextTime = Math.random() * 2000 + 2000;
    setTimeout(breakRandomWire, nextTime);
  }

  function fixWire(wire) {
    if (!gameActive) return;
    wire.classList.remove('broken');
    wire.classList.add('fixed');
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

    let rating, stars;
    if (wiresFixedTotal <= 10) {
      rating = "Técnico Iniciante"; stars = "⭐";
    } else if (wiresFixedTotal <= 16) {
      rating = "Técnico Responsável"; stars = "⭐⭐";
    } else {
      rating = "Guardião da Nave"; stars = "⭐⭐⭐";
    }

    finalScoreText.textContent = `Você reparou ${wiresFixedTotal} de ${TOTAL_WIRES_GOAL} fios!`;
    finalRatingText.textContent = `Pontuação: ${stars} (${rating})`;
    endGameModal.classList.remove('hidden');
  }

  restartButton.addEventListener('click', startGame);
  startGame();
});
