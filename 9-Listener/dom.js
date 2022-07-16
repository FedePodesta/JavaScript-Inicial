



// //hoisting
// //funcione declarativa
// function sumarNumeros(numeroA=10,numeroB=40,boleano=true){

//     var suma = numeroA + numeroB

//     console.log(boleano)
//     console.log(suma)

// }

// sumarNumeros()

// console.log(sumarNumeros())

// function sumarNumerosA(numeroA,numeroB){

//     return numeroA + numeroB
// }

// console.log(sumarNumerosA(10,20))


// var almacenarRetorno = sumarNumerosA(2,10)

// console.log(almacenarRetorno)

// if(almacenarRetorno>15){
//     alert("esta funcion retorna mayor a 20")
// }else{
//     alert("esta funcion retorna menos que 20")
// }


// function mayor(edad){

//     if(edad>18){

//          "el resultado es: "+ true

       

//     }else{

       
//     }


//     return 15

    
// }

// var juan = mayor(20)

// var miguel = mayor(12)

// var carlos = mayor(25)

// console.log(juan)
// console.log(miguel)
// console.log(carlos)

// //objeto... atributos y caracteriscas



function saludando(nombre){

    alert("hola soy un alert interno" + nombre)

}

function contarPalabras(){


}



//document objet model
//JavaScript Vanilla 
//

// console.log(document.doctype)
// console.log(document.body)
// console.log(document.head)
// console.log(document.all)//
// console.log(document.all[12])

console.log(document.getElementById('original1'))
console.log(document.getElementById('original2'))

document.getElementById('original1').textContent = "Rodrigo"


var edad=12

if(edad>18){

document.getElementById('header-title').textContent = "Emmanuel"

}else{
 
    document.getElementById('header-title').textContent = "No puede visitar"
    
}


// document.getElementById('input3').value = "Cafecito poderoso"

function asignarValor(){

    var valorInput1 = document.getElementById('input3').value

    valorInput1 = parseInt(valorInput1)

    var valorInput2 = document.getElementById('input4').value

    valorInput2 = parseInt(valorInput2)

    var total = valorInput1 + valorInput2

    console.log(valorInput1+valorInput2)//

    // var total = valorInput1 + valorInput2

    console.log(total)

    document.getElementById('divSolo').textContent = total

    var valorSelect = document.getElementById('leng').value

    console.log(valorSelect)

    if(valorSelect=="10"){
        alert("bienvenido a Javascritp")

        console.log(total*0.10)
    }

    if(valorSelect=="20"){
        alert("Bienvenido a php")
    }


}


//

var nombreVariableX = "hola probando"

const NOMBRECONS = 20

var nombreVariableX = "hola probando otra cosa"

// NOMBRECONS = 16

console.log(nombreVariableX)

let nombreLet = "juan"

// let nombreLet = "miguelito"

nombreLet= "camila"

console.log(nombreLet)

//Escuchadores...Listener

document.getElementById('probando').addEventListener("click",miFuncion)

document.getElementById('probando').addEventListener("mouseover",cambiarColor)

// document.getElementById('probando').addEventListener("mouseout",eliminarDiv)



function miFuncion(){

    console.log("hola probando escuchador")
    document.getElementById('divSolo').textContent = "probando funcion listener"

}

function cambiarColor(){

    document.getElementById('esotroid').style.backgroundColor = "#2F4965"
    document.getElementById('esotroid').style.height = "150px"
    // document.getElementById('esotroid').style.display = "none"


}



document.getElementById('inputUnico').addEventListener("keydown",escribirTexto)



function escribirTexto(){

    document.getElementById('esotroid').textContent = document.getElementById('inputUnico').value

}


// document.getElementById('inputUnico').addEventListener("focus",cambiarDiv)


// function cambiarDiv(){

//     alert("valor")
// }


let inputUnico = document.getElementById('inputUnico')


inputUnico.addEventListener("click")















