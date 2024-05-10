const sumar = (idNum1, idNume2) => {
    var num1=parseInt(document.getElementById(idNum1).value);
    var num2=parseInt(document.getElementById(idNume2).value);
    var respuesta=num1+num2;
    console.log(respuesta);
    document.getElementById("idResultado").innerText=respuesta;
}

const restar = (idNum1,idNume2) =>{
    var num1=parseInt(document.getElementById(idNum1).value);
    var num2=parseInt(document.getElementById(idNume2).value);
    var respuesta=num1-num2;
    console.log(respuesta);
    document.getElementById("idResultado").innerText=respuesta;
 
}
 
const multiplicar = (idNum1,idNume2) =>{
    var num1=parseInt(document.getElementById(idNum1).value);
    var num2=parseInt(document.getElementById(idNume2).value);
    var respuesta=num1*num2;
    console.log(respuesta);
    document.getElementById("idResultado").innerText=respuesta;
 
}
 
const dividir = (idNum1,idNume2) =>{
    var num1=parseInt(document.getElementById(idNum1).value);
    var num2=parseInt(document.getElementById(idNume2).value);
    var respuesta=num1/num2;
    console.log(respuesta);
    document.getElementById("idResultado").innerText=respuesta;
 
}

function agregarElemento(){
    document.getElementById('idDivision').innerHTML="<button>NUEVO</button>";
}

function quitarElemento(){
    document.getElementById('idDivision').innerHTML="";
}

function conceptosJS(){
    /*Tipos de datos en JS*/
    /*let, var const*/
    const IVA=12;/* tipos de valores que no van a ser asignadps*/
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
}