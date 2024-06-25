// en este programa se hara una calculadora con las 4 operaciones basicas
// Autor: Tomas Alberto Rodriguez Peña

function calculadora(numero1, numero2, operador) {
    let resultado;
    switch (operador) {
        case "+":
            resultado = suma(numero1, numero2);
            break;
        case "-":
            resultado = resta(numero1, numero2);
            break;
        case "*":
            resultado = multiplicacion(numero1, numero2);
            break;
        case "/":
            resultado = division(numero1, numero2);
            break;
        default:
            resultado = "Elija una opcion correcta"
            break;
    }

    return resultado;
}

function suma(numero1, numero2) {
    return numero1 + numero2;
}

function resta(numero1, numero2) {
    return numero1 - numero2
}

function multiplicacion(numero1, numero2) {
    return numero1 * numero2
}

function division(numero1, numero2) {
    return numero1 / numero2
}
function consola() {
    let num1 = Number(prompt("Ingrese el primer numero que deseea operar"));
    let num2 = Number(prompt("Ingrese el segundo numero que deseea operar"));
    let operator = prompt("Ingrese el tipo de operacion que desea realizar");

    console.log("El resultado de su operacion es: " + calculadora(num1, num2, operator));
}

consola()