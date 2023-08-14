import { validar } from "./validaciones.js";

const inputs = document.querySelectorAll("input"); // todos los elementos de tipo input
inputs.forEach(input => {
    input.addEventListener("blur", (input) => {
        validar(input.target);    
    });
});