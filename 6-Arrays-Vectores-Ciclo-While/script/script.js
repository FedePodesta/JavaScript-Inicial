

//arrays... vectores

var nombre1="jose"
var nombre1="walter"
var nombre1="guillermo"
//              0       1        2            3
var nombres = ["jose","walter","guillermo", "antonella"]
//                   0        1       2            3                    4     
var peliculas = ["scarface","dark","spider man", "piratas del caribe","avatar"]

console.log(nombres[0])
console.log(nombres[1])
console.log(nombres[2])
console.log(nombres[3])

console.log(nombres[3-1])

var comidas = ["milanesas","spaguetis","ravioles","hamburguesas","pizza","rotolo","arroz"]

var precios = [700,1200,1000,920,1200,890,200]

var stock = [true,false,true,false,true,true]

var cantidad= [50,45,15,80,120,40,200]

var pedidoCliente = []



console.log(comidas.length) // muestra la cantidad de elementos

// console.log("el producto " + comidas[1] + " tiene un precio de " + 
// precios[1] + " queda en stock la cantidad de " +stock[1])

// console.log("el producto " + comidas[2] + " tiene un precio de " + 
// precios[4] + " queda en stock la cantidad de " +stock[3]) */

// var pedidoProducto = prompt("ingrese un numero de pedido 1-milanesas 2-spaguettis 3-ravioles")

// switch(pedidoProducto){
//     case "1":
//         //if 
//         console.log("eligio " + comidas[0])
//         var cantidad = parseInt(prompt("Ingrese la cantidad a pedir: "))
//         var total = cantidad * precios[0]
//         alert("el total es: " + total)

//     break
//     case "2":
//         console.log ("eligio Spaguettis")
//         console.log("eligio " + comidas[1])
//         var cantidad = parseInt(prompt("Ingrese la cantidad a pedir: "))
//         var total = cantidad * precios[1]
//         alert("el total es: " + total)

//     break
//     default:
//         console.log("no ha elegido nada")
//     break
// }


var comidas = ["milanesas","spaguetis","ravioles","hamburguesas","pizza","rotolo","arroz"]

var precios = [700,1200,1000,920,1200,890,200]

console.log(comidas[1])

//ciclos repetitivos
var numeroA =0

// while (numeroA > 5){
    
//     console.log("probando ciclo while" + numeroA)
//     if(numeroA == 5){
//         //numeroA==20 // if(numero%2==0) { console.log("es par")}
//         break
         
//     }else{
//         numeroA++

//     }

    
// }


//prueba de escritorio 
/* 1<5 = true 
   2<5 =true
   3<5 =true
   3<5 =true
   4<5 = true
   5<5 =false no se ejecuta mas el ciclo while
   6<5 =false no se ejecuta mas el ciclo while

*/
var precios = [700,1200,1000,920,1200,890,200]
var cantidad = 0
var i = 0

while (cantidad<precios.length){
    console.log (precios[i]) 
    
    i++
    cantidad ++
}




while (cantidad<3){
    console.log (precios[cantidad]) // el ciclo se repite y primero imprime 700, 1200, 1000 mientras var cantidad suma ,entra en el mismo numero de orden del array

    cantidad ++
}


// while (cantidad<3){
//     var nombres= prompt("ingrese un nombre")
//     var edad = prompt("ingrese su edad")

//     cantidad ++
// }