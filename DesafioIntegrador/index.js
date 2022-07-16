

 document.getElementById('botonCalcular').addEventListener("click",mensajeclick)

function TotalPago(){
    var valorimput = document.getElementById('cantidadEntrada').value
    var valorselect = document.getElementById('inputState').value
    var valorimput = parseInt(valorimput)
    var valorselect = parseInt(valorselect)
    document.getElementById("totalCompra").textContent="Total a Pagar:$ " + (200 -(valorselect*200/100)) *valorimput 

        
}

function mensajeclick(){
    document.getElementById("divResumen").textContent ="Gracias por su compra "
    document.getElementById('divResumen').style.backgroundColor = "#1e5372"
    document.getElementById('divResumen').style.borderRadius ="45px"
    document.getElementById('divResumen').style.color = "white"
    document.getElementById('divResumen').style.fontSize= "25px"
    document.getElementById('divResumen').style.textAlign ="center"
    document.getElementById('divResumen').style.display = "block"
    document.getElementById('divResumen').style.border = "1px"
    document.getElementById('divResumen').style.textAlign ="center"
    document.getElementById('divResumen').style.padding = "10px"
    document.getElementById('divResumen').style.margin ="1"
    document.getElementById('divResumen').style.boxShadow= "0px -1px 4px 1px cyan"
    
    

}