export function setUpKeyboardGameEvents(){
    let letterDisplay = document.getElementById('letter-to-type');
    let scoreDisplay = document.getElementById('score');
    let score = 0;

    function generateRandomLetter() {
        const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        return alphabet[Math.floor(Math.random() * alphabet.length)];
    }

    function updateGame() {
        const randomLetter = generateRandomLetter();
        letterDisplay.textContent = randomLetter;
    }


    /* apply to the document the even listener keydown and get the key 
    that you press (event.key) convert it in upper case and check if it's equal to letterDisplay if it is add points to the score, update the score text in the html and update the game */


    updateGame(); 
}
