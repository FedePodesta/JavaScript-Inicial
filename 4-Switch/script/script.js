



//le pide al usuario una letra


var c = "c"
var a1 = "a"
var s = "s"
var a2 = "a"



//esto es la base de un contador
// var numero = 0
// numero = numero + 3 // 1
// numero = numero + 3 // 1 + 1
// numero = numero + 3 // 2 + 1
// X = x-1

//operador de incremento ++

//operador de decremento --

// var vidas = 3


// var letra = prompt("ingrese la letra a adivinar")


// if(letra==c){

//     alert("Acertaste.. Excelente!!!")
    


// }else{

//     alert("has perdido una vida")
//    vidas--

// }

// letra = prompt("ingrese la letra a adivinar")

// if(letra==a1){

//     alert("Acertaste.. Excelente!!!")
    


// }else{

//     alert("lo siento otra oportunidad")
//    vidas--

// }

// letra = prompt("ingrese la letra a adivinar")

// if(letra==s){

//     alert("Acertaste.. Excelente!!!")
   


// }else{

//     alert("lo siento otra oportunidad")
//     vidas--
// }

// letra = prompt("ingrese la letra a adivinar")

// if(letra==a2){

//     alert("Acertaste.. Excelente!!!")
    


// }else{

//     alert("lo siento otra oportunidad")
//     vidas--

// }

// console.log("el total de vidas es: " + vidas)
// alert("el total de vidas es:" + vidas)

// var lunes = 1

// var martes = 2

// var miercoles = 3

// var jueves = 4

// var viernes = 5




// if(dia==1){
//     console.log("primera condicion: es lunes" )
// }else if(dia==2){
//     console.log("el tambien si...: es martes")
// }else if(dia==3){
//     console.log("es miercoles")
// }else if(dia==4){
//     console.log("es jueves")
// }else if(dia==5){
//     console.log("es viernes")
// }
// else{

//     console.log("no se ejecuta")
// }

var saldo = 5000

var opcion = prompt("ingrese una opcion a realizar: 1-retirar 2-ingresar 3-Saldo 4-enviar")

switch(opcion){
    case "1":
        var retirar = parseFloat(prompt("¿canto desea retirar?"))

        if(retirar<=saldo){
        console.log("puede retirar cash$$")
        alert("puede retirar dinero")
        saldo = saldo - retirar
        }else{
            alert("espera a principio de mes su saldo es:" + saldo)
        }

        break
    case "2":
        console.log("ingresar dinero")
        alert("puede ingresar dinero")

        var bolsillo = parseFloat(prompt("ingrese dinero"))
        saldo = saldo + bolsillo

        break
    case "3":
        console.log("Consultar Saldo")
        alert("Su saldo es:" + saldo)

        break
    case "4":
        console.log("enviar dinero")
        alert("puede enviar dinero a: ")
        break
    default:
        console.log("no ha elegido ninguna opcion")
        break

}


alert("Su saldo actual es: " + saldo)
1
































