// //objetos literales en javascript

// var persona1 = ["juan","perez",45]
// var persona2 = ["juana", "martinez"]

// var persona = [{

//     'nombre': 'carlos',
//     'apellido': 'perez',
//     'edad': 45,
//     'usuario': true

// },
// {
//     'nombre': 'Amparo',
//     'apellido': 'Garcia',
//     'edad': 25,
//     'usuario': true
// },
// {
//     'nombre': 'emanuel',
//     'apellido': 'sanchez',
//     'edad': 15,
//     'usuario': true
// }

// ]

// console.log(personas[0].nombre)
// console.log(personas[1].nombre)
// console.log(personas[2].nombre)

// //si quiero tener todos uso un for

// for(var i=0;i<persona.length;i++){
//     console.log (personas[i].nombre) //+ apellido)
//     console.log (personas[i].apellido)

// }




// var productos = [
//     {
//         'nombre' : 'pizza',
//         'cantidad' : 15,
//         'stok': true,
//         'precio': 500
//     },
//     {
//         'nombre' : 'empanadas',
//         'cantidad' : 28,
//         'stok': true,
//         'precio': 400
//     },
//     {
//         'nombre' : 'hambuerguesa',
//         'cantidad' : 6,
//         'stok': true,
//         'precio': 800
//     },
//     {
//         'nombre' : 'milanesa',
//         'cantidad' : 20,
//         'stok': true,
//         'precio': 1200
//     },
// ]

// console.log(productos[0].precio)

// if(productos[0].cantidad>40){
//     alert("es mayor")
// }

// //formato JSON
// // console.log(personas[0])

//funciones en javascript

function holaMundo(nombre){

    console.log("hola mundo de js: " + nombre)
    alert(nombre)
    var a = "casa"
    // document.write(a)

}

var numeros = 4

if(numeros>5){

    alert("probando condicion")

}else{
    holaMundo("miguel")
}

function sumarNumeros(numeroA,numeroB,set){


    if(set==true){
    console.log(numeroA + numeroB)
    }else{
        console.log("no hagas nada")
    }

}

sumarNumeros(10=10,20=40,booleano=true)//puedo agregar valores por si el usuario no los agrega







function sumarNumerosA(numeroA,numeroB){
    return numeroA + numberoB
}

console.log(sumarNumerosA(10,20))
// return : guarda el resultado de la funcion en la siguiente variable
var almacenarRetorno = sumarNumerosA(10,10)
// uso de la funcion en un condicional
if(almacenarRetorno>15 ){
    alert("esta f mayor a 20")
}else{
    alert("esta fun reotnra menos que 20")
}

function mayor(edad){
    if (edad > 18 ){
        return true
    }else{
        return false
    }   
}


var juan =mayor(20)
var miguel = mayor(12)
var carlos = mayor(25)