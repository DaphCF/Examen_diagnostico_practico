//Conteo de caracteres: Dada una cadena de texto y luego muestra el número de caracteres que contiene esa cadena.
function contarCaracteres(cadena) {
    return cadena.length;
}
const texto = "Desarrollo de servicios web";
console.log("Conteo de caracteres:", contarCaracteres(texto));

//Reversión de cadena: Dada una frase y luego muestra la misma frase pero con las palabras en orden inverso.
function reversionCadena(cadena) {
    let palabras = cadena.split(" ");
    let fraseReversa = palabras.reverse().join(" ");
    return fraseReversa;
}
const frase = "Desarrollo de Servicios Web";
console.log("Reversión de cadena: ", reversionCadena(frase));

//Palíndromo: Dada una palabra y verifica si es un palíndromo (es decir, si se lee igual de adelante hacia atrás que de atrás hacia adelante).
function esPalindromo(palabra) {
    let palabraInversa = palabra.split("").reverse().join("");
    return palabra.toLowerCase() === palabraInversa.toLowerCase();
}
const palabra = "oso";
console.log("Palíndromo: ", esPalindromo(palabra));

//Ordenamiento de un arreglo: Crea un arreglo de números desordenados y luego ordénalo de menor a mayor utilizando algún algoritmo de ordenamiento (p. ej., el método sort()).
function ordenar(numeros) {
    return numeros.sort((a, b) => a - b);
}
const numeros = [5, 2, 8, 1, 3, 7];
console.log("Ordenamiento de un arreglo: ", ordenar(numeros));

//Suma de elementos de un arreglo: Crea un arreglo de números y calcula la suma de todos sus elementos.
function sumarArreglo(numeros) {
    return suma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
}
const numerosSuma = [1, 4, 5, 3, 2];
console.log("Suma de elementos de un arreglo: ", sumarArreglo(numerosSuma));

//Filtrado de elementos en un arreglo: Crea un arreglo de números y filtra los elementos para mostrar solo aquellos que sean mayores que un valor dado por el usuario.
// function filtrarArreglo(numeros, valor) {
//     return numeros.filter(numero => numero > valor);
// }
// const readline = require('readline');
// const numerosFiltro = [1, 6, 5, 3];
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// rl.question('Ingrese un número: ', valor => {
//     console.log("Filtrado en un arreglo: ", filtrarArreglo(numerosFiltro, valor));
//     rl.close();
// });

//Concatenación de arreglos: Crea dos arreglos de strings y luego concatenarlos en un solo arreglo.
function concatenarArreglos(ar1, ar2) {
    return ar1.concat(ar2);
}
const arreglo1 = ["desarrollo", "de"];
const arreglo2 = ["servicios", "web"];
console.log("Concatenación de arreglos: ", concatenarArreglos(arreglo1, arreglo2));

//Búsqueda de elementos en un arreglo: Crea un arreglo de nombres y dada una cadena con un nombre,  verifica si ese nombre está presente en el arreglo y muestra un mensaje apropiado.
function buscarArreglo(nombres, valor) {
    if (nombres.filter(nombre => nombre === valor).length === 0) return false;
    else return true;
}
const nombres = ["Juan", "Alfredo", "Teresa"];
console.log("Búsqueda en un arreglo: ", buscarArreglo(nombres, "Alfredo"));