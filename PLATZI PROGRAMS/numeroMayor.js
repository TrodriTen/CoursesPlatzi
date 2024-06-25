// en este programa encontrara el mayor numero en un arrelgo de numeros
// Autor: Tomas Alberto Rodriguez Peña

function arrayTest(numeros) {
  let maxima = 0
  for (let i = 0; i < numeros.length; i++) {
    if (maxima < parseInt(numeros[i])) {
      maxima = parseInt(numeros[i]);
    }
  }
  return maxima;
}

function consola() {
  let nums = prompt("Ingrese la cadena de numeros de la lista separados por una coma");

  var numeros = nums.split(",");

  console.log("esta es su lista de numeros que desea ver cual es el maximo: " + numeros);
  console.log("Este es el maximo numero de su lista de numeros: " + arrayTest(numeros));

}

consola()