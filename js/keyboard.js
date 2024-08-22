export function setUpKeyboardGameEvents() {
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

    /* 
    Aplica un event listener del tipo 'keydown' al documento.
    Cuando se presiona una tecla, obtiene la tecla presionada (event.key), 
    conviértela a mayúsculas y verifica si coincide con la letra mostrada 
    (letterDisplay.textContent). 
    Si la tecla coincide, suma puntos al marcador, actualiza el marcador en el HTML 
    y llama a updateGame() para mostrar una nueva letra aleatoria.
    */


    

    updateGame(); 
}