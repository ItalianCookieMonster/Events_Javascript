export function setUpFormGameEvents(){
        const form = document.getElementById('registration-form');
        const usernameInput = document.getElementById('username');
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');
    
        function validateInput(inputElement, errorMessageElement, validationFunction) {
            inputElement.addEventListener('input', function() {
                if (validationFunction(inputElement.value)) {
                    errorMessageElement.style.display = 'none';
                } else {
                    errorMessageElement.style.display = 'block';
                }
            });
        }
    
        validateInput(usernameInput, usernameInput.nextElementSibling, value => value.trim() !== '');
        validateInput(emailInput, emailInput.nextElementSibling, value => /\S+@\S+\.\S+/.test(value));
        validateInput(passwordInput, passwordInput.nextElementSibling, value => value.length >= 6);
    
        form.addEventListener('submit', function(event) {
            event.preventDefault();  
    
            let isValid = true;
            const errorMessages = form.querySelectorAll('.error-message');
    
            errorMessages.forEach(message => {
                if (message.style.display === 'block') {
                    isValid = false;
                }
            });
    
            if (isValid) {
                console.log('Form submitted successfully!');
            } else {
                console.log('Errors in form submission.');
            }
        });
};

