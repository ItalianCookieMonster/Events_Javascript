function setUpMouseGameEvents() {

    

    /* 
    Primero, obtiene el elemento #game-container y añade un event listener 'mousemove'.
    Cuando se mueve el mouse, inicia el juego estableciendo el display de #start-message 
    a 'none' y quitando la clase 'hidden' de #game-area.
    */

    /* 
    Obtén todos los elementos con la clase .draggable y todos los elementos con la clase .target.
    Itera a través de los elementos .draggable y añade event listeners 'mousedown' y 'mouseup'.
    En 'mousedown', añade la clase 'dragging' al elemento, y en 'mouseup', quita la clase 'dragging'.
    */

    /* 
    Itera a través de los elementos .target.
    Cuando el mouse está sobre un elemento objetivo (mouseover), obtiene el draggingElement del 
    elemento con la clase 'dragging'. Verifica si hay un draggingElement y si su textContent.trim() 
    coincide con el atributo data-match del elemento objetivo (e.target.getAttribute('data-match')).
    Si es true, añade el draggingElement al objetivo y cambia el borde del objetivo.
    */

}

export { setUpMouseGameEvents }