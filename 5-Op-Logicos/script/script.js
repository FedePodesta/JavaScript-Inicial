
// var result = confirm("quiere salir de la pagina")
// //valor del tipo booleno aceptar = true  cancelar = false
// console.log(result)

// if(result){
//     alert("gracias por visitarnos")
// }else if(result){
//     result = confirm("quiere salir de la pagin")
// }
// else{
//     alert("gracias por continuar")
// }


// var cookies = confirm("acepta las cookies")


// if(cookies){

//     alert("gracias ahora lo estamos espiando")
//     var cookies2 = confirm("esta hiper suguro")

// }else if(cookies2){
    
// }

// else{

//     alert("gracias ")

// }


/*  OPERADOR AND && (las dos condiciones tienen que ser true)

    true || true = true
    false || true = false
    true || false = false
    false || false = false
*/
var edad= 18
var nacionalidad = argentina

if(edad>=18 && nacionalidad == argentina){
    alert("puede votar")
}else{
    alert("no puede votar")
}

// var usser = "walter"
// var pass = "123"
// var check = true

// if(usser=="walter" && pass=="1234" &&){

//     alert("usser y pass correctos")

// }else{

//     alert("pass o usuario incorrectos")
// //     false
//     if((usser=="walter")!=true){
//         alert("el usuario fue incorrecto")
//     }

//     if(pass!="1234"){
//         alert("el pass incorrecto")
//     }

// }






/* 
    OPERADOR OR || (AL MENOS 1 DE LAS 2 TIENE QUE SER TRUE)    

    true || true = true
    false || true = true
    true || false = true
    false || false = false
*/

var edadFede=25
var entradaVip =true

if (edadFede > 18 || entradaVip ==true){
    alert("puede ingresar a la sala")
}else {
    alert("no puede ingresar")
}

//operador negado Not!

var soyRobot = true

if (!soyRobot==true){
    alert("soy un robot")
}else{
    alert("no soy un robot")
}
