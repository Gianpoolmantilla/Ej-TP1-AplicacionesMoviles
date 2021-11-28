// Ejercicio 10

//Define la función contiene que dado un elemento y una lista, nos diga si la lista contiene al elemento

const numeros = [1, 2, 3, 4, 5];


function contiene(arrNum, num) {
    const contiene = arrNum.some(n => n === num);

    console.log(contiene);

}


contiene(numeros, 6);