const sumar = (idNum1, idNume2) => {
    var num1 = parseInt(document.getElementById(idNum1).value);
    var num2 = parseInt(document.getElementById(idNume2).value);
    var respuesta = num1 + num2;
    console.log(respuesta);
    document.getElementById("idResultado").innerText = respuesta;
}

const restar = (idNum1, idNume2) => {
    var num1 = parseInt(document.getElementById(idNum1).value);
    var num2 = parseInt(document.getElementById(idNume2).value);
    var respuesta = num1 - num2;
    console.log(respuesta);
    document.getElementById("idResultado").innerText = respuesta;

}

const multiplicar = (idNum1, idNume2) => {
    var num1 = parseInt(document.getElementById(idNum1).value);
    var num2 = parseInt(document.getElementById(idNume2).value);
    var respuesta = num1 * num2;
    console.log(respuesta);
    document.getElementById("idResultado").innerText = respuesta;

}

const dividir = (idNum1, idNume2) => {
    var num1 = parseInt(document.getElementById(idNum1).value);
    var num2 = parseInt(document.getElementById(idNume2).value);
    var respuesta = num1 / num2;
    console.log(respuesta);
    document.getElementById("idResultado").innerText = respuesta;

}

function agregarElemento() {
    document.getElementById('idDivision').innerHTML = "<button>NUEVO</button>";
}

function quitarElemento() {
    document.getElementById('idDivision').innerHTML = "";
}

function conceptosJS() {
    /*Tipos de datos en JS*/
    /*let, var const*/
    const IVA = 12;/* tipos de valores que no van a ser asignadps*/
    console.log(IVA);
    /*IVA=15;
     console.log(IVA);
 /*Es una constante entonces no se puede cambiar */

    var nombre = "Edison";
    console.log(nombre);

    nombre = "Bryan"
    console.log(nombre)

    /*Let administra mejor el espacio de memoria */

    let apellido = "Mullo";
    console.log(apellido);

    apellido = "Paucar";
    console.log(apellido);


    //Declaracion de arreglos

    const diasSemana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];
    console.log(diasSemana);
    console.log(diasSemana[0]);
    console.log(diasSemana[1]);
    console.log(diasSemana[5]); //Da undefined al no existir

    diasSemana[5] = "sabado";
    console.log(diasSemana[5])

    diasSemana.push("domingo");
    console.log(diasSemana);

    diasSemana.unshift("dias");
    console.log(diasSemana);

    const numerosPares = [2, 4, 6, 8, 10];
    console.log(numerosPares);

    const numerosImpares = [1, 3, 5, 7, 9];

    const numerosComplejos = numerosPares.concat(numerosImpares);
    console.log(numerosComplejos)


    //usamos una sentencia for para recorrer
    for (const dia of diasSemana) {
        console.log(dia);

        if (dia === "Viernes") { //buena practica apra comprar son 3 iguales
            console.log("Por fin llego el fin de semana");
        }
    }

    if (diasSemana[8] === undefined) {
        console.log("No tiene valor");
    } else {
        console.log("Si tiene valor");
    }

    //Manejo de objetos
    const estudiante = {
        nombre: "Bryan",
        apellido: "Mullo",
        edad: 25,
        genero: "M",
        ciudadNacimiento: "Quito"
    }

    console.log(estudiante);
    console.log(estudiante.apellido);

    estudiante.nombre = "Fernando";
    console.log(estudiante);

    const profesor = {
        nombre: "Edison",
        apellido: "Cayambe",
        edad: 34,
        genero: "M",
        ciudadNacimiento: "Quito",
        direccion: {
            callePrincipal: "Av. America",
            calleSecundaria: "La Gasca",
            numeracion: "Oe3-59",
            barrio: "Belisario Quevedo"
        }
    }

    console.log(profesor);
    console.log(profesor.direccion.barrio);

    profesor.direccion.barrio = "Triangulo de Piedra";
    console.log(profesor.direccion.barrio);


    //Arreglos de objetos
    const estu1 = {
        nombre: "Fernando",
        apellido: "Paucar",
    }

    const estu2 = {
        nombre: "Maoly",
        apellido: "Loor",
    }

    const estu3 = {
        nombre: "Alex",
        apellido: "Andrango",
    }

    const estu4 = {
        nombre: " Bryan",
        apellido: "Paucar",
    }

    const estudiantes = [estu1, estu2, estu3, estu4];
    console.log(estudiantes);
    console.table(estudiantes);

    console.log(estudiantes[1]);
    console.log(estudiantes[1].apellido);
    estudiantes[1].apellido = "Guerrero";
    console.table(estudiantes);


    const profesores = [
        { nombre: "Edison", edad: 34 },
        { nombre: "Andrea", edad: 32 }
    ];
    console.table(profesores);

    //el pop elimina el ultimo elemento de una lista y aparte lo va sacando en una variable si se desea
    var prof = profesores.pop();
    console.log(prof);
    console.table(profesores);

    //Desestructuracion de arreglos
    const diasSemana2 = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];
    const [d1, d2, d3, d4, d5] = diasSemana2;
    console.log(d2);
    console.log(d5);

    console.table(diasSemana2);

    const [dia1, dia2, dia3, dia4, dia5] = ["Lunes-1", "Martes-2", "Miercoles-3", "Jueves-4", "Viernes-5"];
    console.log(dia2);
    console.log(dia3);


    //Desestructurazion de objetos
    const vehiculo = {
        marca: "Chevrolet",
        modelo: "Sail",
        anio: 2015
    }

    //es diferente que los arreglos en objetos se usa llaves y aqui no se rige por la posicion sino por el nombre
    const { marca, anio } = vehiculo;
    console.log(marca);
    console.log(anio);


    const { modelo } = {
        marca: "Ford",
        modelo: "Edge",
        anio: 2020
    }

    console.log(modelo);


    //Desestructuracion de un objeto que tenga un atributo compuesto
    const estudianteC = {
        nombre1: "Bryan",
        apellido1: "Loor",
        edad: 25,
        genero: "M",
        ciudadNacimiento: "Quito",
        direccion: {
            callePrincipal: "Maria Barreto",
            calleSecundaria: "Calle A",
            numeracion: "Oe3-39",
            barrio: "Triangulo de Piedra"
        }
    }

    /*const { nombre1, apellido1, direccion } = estudianteC;

    console.log(nombre1);
    console.log(apellido1);
    console.log(direccion);

    const{callePrincipal, barrio} = direccion;
    console.log(callePrincipal),
    console.log(barrio);*/

    const { nombre1, apellido1, direccion: {numeracion, barrio} } = estudianteC;
    console.log(nombre1);
    console.log(apellido1);
    console.log(barrio);


}