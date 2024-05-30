
import { setUpMouseGameEvents } from './mouse.js'
import { setUpKeyboardGameEvents } from './keyboard.js';
import { setUpFormGameEvents } from './form.js';
import { setUpApiGameEvents } from './api.js';

function showGame(gameType) {
    const mainContent = document.getElementById('main-content');

    mainContent.innerHTML = '';

    const gameContainer = document.createElement('div');

    switch (gameType) {
        case 'mouse':
            gameContainer.innerHTML = `<h2>Mouse Events Game</h2>
                                        <div id="game-container">
                                        <p id="start-message">Move the mouse to start the game</p>
                                        <div id="game-area" class="hidden">
                                            <div class="draggable" style="background-color: #ff6347;">🟦</div>
                                            <div class="draggable" style="background-color: #32cd32;">🟠</div>
                                            <div class="target" data-match="🟦"></div>
                                            <div class="target" data-match="🟠"></div>
                                        </div>
                                    </div>`;
            break;
        case 'keyboard':
            gameContainer.innerHTML = `<h2>Keyboard Events Game</h2>
                                        <div id="game-container">
                                        <h1>Type the Letter!</h1>
                                        <div id="letter-to-type">A</div>
                                        <p id="score">Score: 0</p>
                                        </div>`;
            break;
        case 'form':
            gameContainer.innerHTML = `<h2>Form Events Game</h2>
                                        <form id="registration-form">
                                            <label for="username">Username:</label>
                                            <input type="text" id="username" required>
                                            <span class="error-message hidden">Username is required</span>
                                        
                                            <label for="email">Email:</label>
                                            <input type="email" id="email" required>
                                            <span class="error-message hidden">Please enter a valid email</span>
                                        
                                            <label for="password">Password:</label>
                                            <input type="password" id="password" required>
                                            <span class="error-message hidden">Password must be at least 6 characters</span>
                                        
                                            <button type="submit" class="form-button">Register</button>
                                        </form>
                                        <p>Submit the form to see form events.</p>`;
            break;
        case 'api':
            gameContainer.innerHTML = `<h2>API Events Game</h2>
                                        <div id="pokemon-display">
                                        <button id="fetch-pokemon">Fetch Pokémon</button>
                                        <ul id="pokemon-list"></ul>
                                        </div>`;
            break;
    }


    mainContent.appendChild(gameContainer);


    switch (gameType) {
        case 'mouse':
            setUpMouseGameEvents();
            break;
        case 'keyboard':
            setUpKeyboardGameEvents();
        case 'form':
            setUpFormGameEvents();
            break;
        case 'api':
            setUpApiGameEvents();
            break;

    }

}


document.addEventListener('DOMContentLoaded', () => {
    console.log('I am handling the DOMContentLoaded event')
    const buttons = document.querySelectorAll('.nav-btn');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const gameType = button.getAttribute('data-game-type');
            showGame(gameType);
        });
    });
});