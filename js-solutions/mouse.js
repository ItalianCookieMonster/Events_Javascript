function setUpMouseGameEvents() {
    document.getElementById('game-container').addEventListener('mousemove', function () {
        console.log('I am handling the mousemove event');
        this.querySelector('#start-message').style.display = 'none';
        this.querySelector('#game-area').classList.remove('hidden');
    });

    const draggables = document.querySelectorAll('.draggable');
    const targets = document.querySelectorAll('.target');

    draggables.forEach(draggable => {
        draggable.addEventListener('mousedown', function (event) {
            event.target.classList.add('dragging');
        });

        draggable.addEventListener('mouseup', function (event) {
            event.target.classList.remove('dragging');
        });
    });

    targets.forEach(target => {
        target.addEventListener('mouseover', function (event) {
            // console.log('I am handling the mouseover event');
            const draggingElement = document.querySelector('.dragging');
            if (draggingElement && draggingElement.textContent.trim() === event.target.getAttribute('data-match')) {
                event.target.appendChild(draggingElement);
                event.target.style.border = '2px solid green';
            }
        });
    });

}

export { setUpMouseGameEvents }