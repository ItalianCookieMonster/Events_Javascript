export function setUpButtonClickGameEvents() {
    let clickButton = document.getElementById('click-button');
    let clickCountDisplay = document.getElementById('click-count');
    let timerDisplay = document.getElementById('timer');
    let clickCount = 0;
    let timeLeft = 10; 
    let timer;

    function startGame() {
        clickCount = 0;
        timeLeft = 10;
        clickCountDisplay.textContent = clickCount;
        timerDisplay.textContent = `Time left: ${timeLeft}s`;

        clickButton.disabled = false;

        timer = setInterval(() => {
            timeLeft--;
            timerDisplay.textContent = `Time left: ${timeLeft}s`;
            if (timeLeft <= 0) {
                clearInterval(timer);
                clickButton.disabled = true;
                alert(`Time's up! You clicked ${clickCount} times.`);
            }
        }, 1000);
    }

    clickButton.addEventListener('click', () => {
        clickCount++;
        clickCountDisplay.textContent = clickCount;
    });

    clickButton.addEventListener('click', startGame, { once: true });
}