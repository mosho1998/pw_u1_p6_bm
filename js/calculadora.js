function sumar(idNum1,idNume2){
    var num1=parseInt(document.getElementById(idNum1).value);
    var num2=parseInt(document.getElementById(idNume2).value);
    var respuesta=num1+num2;
    console.log(respuesta);
    document.getElementById("idResultado").innerText=respuesta;
 
}
 
function restar(idNum1,idNume2){
    var num1=parseInt(document.getElementById(idNum1).value);
    var num2=parseInt(document.getElementById(idNume2).value);
    var respuesta=num1-num2;
    console.log(respuesta);
    document.getElementById("idResultado").innerText=respuesta;
 
}
 
function multiplicar(idNum1,idNume2){
    var num1=parseInt(document.getElementById(idNum1).value);
    var num2=parseInt(document.getElementById(idNume2).value);
    var respuesta=num1*num2;
    console.log(respuesta);
    document.getElementById("idResultado").innerText=respuesta;
 
}
 
function dividir(idNum1,idNume2){
    var num1=parseInt(document.getElementById(idNum1).value);
    var num2=parseInt(document.getElementById(idNume2).value);
    var respuesta=num1/num2;
    console.log(respuesta);
    document.getElementById("idResultado").innerText=respuesta;
 
}