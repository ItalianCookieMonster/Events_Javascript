export function setUpFormGameEvents(){
        const form = document.getElementById('registration-form');
        const usernameInput = document.getElementById('username');
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');
    
        /* create a function validateInput that accepts three values the inputElement, the error
        message and a validationFunction that returns true or false..
        This function should add an event listener to the input element of type input and implement a funcion
        that checks if the value passed in the validationFunction is true
        validationFunction(inputElement.value) if it's true the errorMessageElement will 
        be display none else it will be displayed block */


        
        validateInput(usernameInput, usernameInput.nextElementSibling, value => value.trim() !== '');
        validateInput(emailInput, emailInput.nextElementSibling, value => /\S+@\S+\.\S+/.test(value));
        validateInput(passwordInput, passwordInput.nextElementSibling, value => value.length >= 6);

        /* Add an event listener type 'submit' to the form and pass a function with the
        event as paramenter. Prevent the default behavior of the form submit.
        Create a constant to check if the form isValid which is going to be true
        Get all .error-message.
        Iterate trhogh them => if the message is display block than isValid become false 
        Then check if isValid and console.log a message of success, else console.log 
        a message of failure. */



};

