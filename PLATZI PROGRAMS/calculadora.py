# en este programa se hara una calculadora con las 4 operaciones basicas
# Autor: Tomas Alberto Rodriguez Peña

def calculadora(numero1, numero2, operador) -> str:
    resultado = ""
    match operador:
        case "+":
            resultado = ("La suma de los dos numeros es: " +
                         str(suma(numero1, numero2)))
        case "-":
            resultado = ("La resta de los dos numeros es: " +
                         str(resta(numero1, numero2)))
        case "*":
            resultado = ("La multiplicacion de los dos numeros es: " +
                         str(multiplicacion(numero1, numero2)))
        case "/":
            resultado = ("La division de los dos numeros es: " +
                         str(division(numero1, numero2)))
        case _:
            resultado = (
                "Elija por favor una operacion acorde a las funciones de la calculadora")
    return resultado


def suma(numero1, numero2) -> int:
    return numero1 + numero2


def resta(numero1, numero2) -> int:
    return numero1 - numero2


def multiplicacion(numero1, numero2) -> int:
    return numero1 * numero2


def division(numero1, numero2) -> float:
    return numero1 / numero2


def consola() -> None:
    num1 = int(input("Ingrese el primer numero que deseea operar: "))
    num2 = int(input("Ingrese el segundo numero que deseea operar: "))
    operator = input("Ingrese el tipo de operacion que desea realizar: ")

    print(calculadora(num1, num2, operator))


consola()
