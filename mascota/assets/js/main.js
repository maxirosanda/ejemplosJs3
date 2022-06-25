let nombre = prompt("ponme un nombre!")
alert("valla que nombre me has dado..." + nombre)
let accion = prompt("que quieres que haga COMER, IR AL BANO, DARME AMOR, DORMIR").toLowerCase()

while(accion != "dormir"){
    console.log(accion)
    switch (accion){
        case "comer":
            let alimento = prompt("que aliento?").toLowerCase()
            while(alimento != "fin"){
            alert("ñam ñam, que rico!!") 
            alimento = prompt("que aliento?, para dejar de alimentar solo coloca fin").toLowerCase()
            }
            alert("ñam ñam, que rico!!")
            break
        case "ir al baño":
            alert("Gracias")
            break
        case "darme amor":
            alert("te amo amiguito!!")
            break
        default:
            alert("Que estas diciendo willi ????")
            break
    }
    accion = prompt("que quieres que haga COMER, IR AL BAÑO, DARME AMOR, DORMIR").toLowerCase()
}

alert("Zzzzzz")