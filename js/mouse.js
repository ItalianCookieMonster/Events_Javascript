function setUpMouseGameEvents() {


    /* First we need to get the #game-container and add the event listener 'mousemove' so that 
    when we move the mouse the game starts. Display none to the #start-message and remove the hidden
    class from #game-area */


    /* get all the elemnts .draggable and ger all the elements .target
    iterate trough them and add mousedown and mouseup events and add and remove the class 
    dragging */




    /* iterate trhough the target elements.
    When the mouse is over the element (mouseover)  get the draggingElement from .dragging
    check if there is a draggingElement && if his textContent.trim() is equal to 
    el data-match attribute given to the target element. (e.target.getAttribute('data-match').
    If it's true append the draggingElement to the target
    change the border of the target 
    ) */


}

export { setUpMouseGameEvents }