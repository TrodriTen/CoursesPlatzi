def posicionPalabras(cadena: str, posicionI, posicionF) -> str:
    cadena1 = cadena.replace(" ", "")
    newCadena = cadena1[posicionI:posicionF+1]
    return newCadena
