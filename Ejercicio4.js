//Ejercicio 4
/* Define una función que dado un array de números nos dice si alguno es par. */
function validoPar (arrayNum){

console.log(arrayNum.some(num => num % 2 === 0));


}


validoPar([1,3,5,7]);
validoPar([1,2,5,7]);