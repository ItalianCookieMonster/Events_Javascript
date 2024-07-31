export function setUpFormGameEvents() {
        const form = document.getElementById('registration-form');
        const usernameInput = document.getElementById('username');
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');

        /* 
        Crea una función `validateInput` que acepte tres parámetros:
        - inputElement: El campo de entrada a validar.
        - errorMessageElement: El elemento donde se mostrará el mensaje de error.
        - validationFunction: Una función que retorna true si la entrada es válida, false en caso contrario.

        Esta función debe añadir un event listener del tipo 'input' al elemento de entrada.
        El manejador de eventos debe comprobar el valor usando la validationFunction. 
        Si validationFunction(inputElement.value) retorna true, oculta el errorMessageElement 
        estableciendo su display a 'none'. De lo contrario, establece el display a 'block'.
        */

        validateInput(usernameInput, usernameInput.nextElementSibling, value => value.trim() !== '');
        validateInput(emailInput, emailInput.nextElementSibling, value => /\S+@\S+\.\S+/.test(value));
        validateInput(passwordInput, passwordInput.nextElementSibling, value => value.length >= 6);

        /* 
        Añade un event listener del tipo 'submit' al formulario. 
        El manejador de eventos debe:
        1. Prevenir el comportamiento predeterminado del envío del formulario.
        2. Crear una constante `isValid` y establecerla en true.
        3. Obtener todos los elementos con la clase '.error-message'.
        4. Iterar a través de estos elementos. Si alguno de estos elementos tiene el display configurado en 'block', establece `isValid` en false.
        5. Si `isValid` es true, muestra un mensaje de éxito en la consola. De lo contrario, muestra un mensaje de error.
        */
};
