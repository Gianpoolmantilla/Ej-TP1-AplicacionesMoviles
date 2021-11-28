//Ejercicio 6
/*Define la función quienesAprobaron, que dada la información de un curso devuelve la información de los alumnos que aprobaron. 
Podés usar la función que hiciste en el ejercicio anterior.
 */


const notas = ([[4, 4, 4, 4], [7, 9, 4, 5]]);

function quienesAprobaron(notas) {

    const alumnosAprobados = notas.filter(a => a.every(b => b >= 4));
    alumnosAprobados.forEach(element => { console.log(element) });

}

quienesAprobaron(notas);
