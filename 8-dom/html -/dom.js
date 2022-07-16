



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
    alert ("hola soy un alert interno" + nombre)
}

function contarPalabras (){


}

//document Objet Model (significado de Dom)
// JavaScript Vanilla (mejor forma de manipular objeto)
// 
console.log(document.doctype)
console.log(document.body)
console.log(document.head)
console.log(document.all)

console.log(document.all[12])

console.log (document.getElementById('original1'))
console.log (document.getElementById('original2'))

document.getElementById('original1').textContent ="Rodrigo"

var edad = 12

if (edad>18){


document.getElementById('header-title').textContent ="emmanuel"
}else{
    document.getElementById('header-title').textContent ="no puede visitar"
}



//document.getElementById('input3').value= "Cafecito poderoso"

// //function asignarValor(){
//     var valorInput = document.getElementById('input3').value

//     document.getElementById('divSolo').textContent = valorInput


// }

// function asignarValor(){
//     var valorInput = document.getElementById('input4').value

//     document.getElementById('divSolo').textContent = valorInput


// }
function sumarValores(){
    var valorInput = document.getElementById ('input3').value
    var valorInput2 = document.getElementById('input4').value
    document.getElementById('divSolo').textContent = (parseInt(valorInput)) + (parseInt(valorInput2))
}
