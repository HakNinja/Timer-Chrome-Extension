let timer;
let minutes = 25; // Initial minutes
let seconds = 0; // Initial seconds
let isRunning = false;

function startTimer() {
    isRunning = true;
    timer = setInterval(updateTimer, 1000);
}

function stopTimer() {
    isRunning = false;
    clearInterval(timer);
}

function resetTimer() {
    stopTimer();
    minutes = 25;
    seconds = 0;
    updateDisplay();
}

function updateTimer() {
    if (seconds > 0) {
        seconds--;
    } else if (minutes > 0) {
        seconds = 59;
        minutes--;
    } else {
        stopTimer();
        // Time's up! Implement any action you want here
    }
    updateDisplay();
}

function updateDisplay() {
    const displayMinutes = String(minutes).padStart(2, '0');
    const displaySeconds = String(seconds).padStart(2, '0');
    document.getElementById('timer').innerText = `${displayMinutes}:${displaySeconds}`;
}

document.getElementById('startButton').addEventListener('click', () => {
    if (!isRunning) {
        startTimer();
    }
});

document.getElementById('resetButton').addEventListener('click', resetTimer);

updateDisplay(); // Update display initially
