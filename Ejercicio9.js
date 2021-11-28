//Ejercicio 9
/*Escribí una función rechazar, que dada una condición y un array, devuelva un array con los elementos que no la cumplen */


const listaNumero = [-1, -2, 3, 4, 5];

function rechazar(listaNum) {
    const noCumplen = listaNum.filter(num => num <= 0 ? "" : num);
    console.log(noCumplen);
}

const noCumplen = function (x) {

    const arrayNoCumplen = [];
    return arrayNoCumplen.push(x);
}

rechazar(listaNumero);