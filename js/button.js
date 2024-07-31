export function setUpButtonClickGameEvents() {
    let clickButton = document.getElementById('click-button');
    let clickCountDisplay = document.getElementById('click-count');
    let timerDisplay = document.getElementById('timer');
    let clickCount = 0;
    let timeLeft = 10; // segundos
    let timer;

    /* 
    Tarea 1: Añade un event listener a 'clickButton' para aumentar 'clickCount'
    cada vez que se haga clic en el botón. Actualiza 'clickCountDisplay' con el nuevo conteo.
    */

    /* 
    Tarea 2: Inicia el juego y el temporizador en el primer clic del botón.
    - Crea una función 'startGame' que inicialice el temporizador.
    - En 'startGame', usa setInterval para disminuir 'timeLeft' cada segundo.
    - Cuando 'timeLeft' llegue a 0, limpia el intervalo y desactiva el botón.
    - Muestra el total de clics en una alerta.
    */

}