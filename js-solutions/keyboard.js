export function setUpKeyboardGameEvents(){
    const letterDisplay = document.getElementById('letter-to-type');
    const scoreDisplay = document.getElementById('score');
    let score = 0;

    function generateRandomLetter() {
        const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        return alphabet[Math.floor(Math.random() * alphabet.length)];
    }

    function updateGame() {
        const randomLetter = generateRandomLetter();
        letterDisplay.textContent = randomLetter;
    }

    document.addEventListener('keydown', event => {
        console.log(`I am handling the keydown event for key: ${event.key}`);
        if (event.key.toUpperCase() === letterDisplay.textContent) {
            score++;
            scoreDisplay.textContent = `Score: ${score}`;
            updateGame(); 
        }
    });

    updateGame(); 
}
