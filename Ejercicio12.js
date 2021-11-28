
//Ejercicio 12
//Crea una clase Estudiante (que herede de Persona) que tenga un atributo profesor y tenga dos métodos.
//El método estudiando() que imprime el mensaje “Estudiando con ” y el nombre del profesor con el que se encuentra estudiando.
//El método setProfesor(profesor) que setea con qué profesor se encuentra estudiando.

const Persona = require("./Ejercicio11.js");

class Estudiante extends Persona {
    profesor;

    constructor(nombre) {
        super(nombre);
    }

    estudiando() {
        console.log("estudiando con el profesor: " + this.profesor);
    }

    setProfesor(profesor) {
        this.profesor = profesor;
    }

}

let e1 = new Estudiante("julia", 22);
let e2 = new Estudiante("ximena", 24);


e1.setProfesor("Profesor pepe");
e2.setProfesor("Profesor  pepe");

module.exports = Estudiante, e1;









