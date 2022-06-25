const nombre = prompt("ingrese su nombre")
alert(`Hola ${nombre}, bienvenido a la peluqueria de Don mateo`)
let corte = prompt("¿que tipo de corte quiere (para corte masculino:1, para corte femenino: 2)")
let precioTotal = 0
let pagoTotal = 0


while(corte != 1 && corte != 2){
    alert("El corte no existe")
    corte = prompt("¿que tipo de corte quiere (para corte masculino:1, para corte femenino: 2)")
}

if(corte == 1){
    precioTotal = 500
}else{
    precioTotal = 900
}

alert(`El precio total de corte es ${precioTotal}`)
pagoTotal = parseFloat(prompt("con cuanto vas a pagar?")) 

while(pagoTotal < precioTotal){
    alert("el pago es insuficiente")
    pagoTotal = parseFloat(prompt("con cuanto vas a pagar?"))
}

alert(`su pago es de ${pagoTotal}, el cambio es de ${pagoTotal - precioTotal }`)
