const circle = document.getElementById('circle');
const currentScoreElem = document.getElementById('currentScore');
const highScoreElem = document.getElementById('highScore');
const startGameBtn = document.getElementById('startGame');

let currentScore = 0;
let highScore = localStorage.getItem('highScore') || 0;
highScoreElem.textContent = highScore;

let gameInterval;
let isGameRunning = false;

// Función para generar posiciones aleatorias
function getRandomPosition() {
    const container = document.querySelector('.game-container');
    const maxX = container.clientWidth - 50;
    const maxY = container.clientHeight - 50;
    const x = Math.floor(Math.random() * maxX);
    const y = Math.floor(Math.random() * maxY);
    return { x, y };
}

// Mostrar el círculo en una nueva posición
function moveCircle() {
    const { x, y } = getRandomPosition();
    circle.style.left = `${x}px`;
    circle.style.top = `${y}px`;
    circle.style.display = 'block';

    setTimeout(() => {
        if (isGameRunning) circle.style.display = 'none';
    }, 1000);
}

// Incrementar puntaje
circle.addEventListener('click', () => {
    currentScore++;
    currentScoreElem.textContent = currentScore;
    circle.style.display = 'none';

    if (currentScore > highScore) {
        highScore = currentScore;
        highScoreElem.textContent = highScore;
        localStorage.setItem('highScore', highScore);
    }
});

// Iniciar juego
startGameBtn.addEventListener('click', () => {
    if (isGameRunning) return;

    isGameRunning = true;
    currentScore = 0;
    currentScoreElem.textContent = currentScore;
    circle.style.display = 'none';

    gameInterval = setInterval(() => {
        if (isGameRunning) moveCircle();
    }, 1500);

    setTimeout(() => {
        clearInterval(gameInterval);
        isGameRunning = false;
        alert(`Juego terminado. Tu puntaje es ${currentScore}`);
    }, 30000); // Duración de 30 segundos
});
