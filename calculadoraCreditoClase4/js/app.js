/*
let credito = parseInt(prompt("ingrese el monto de credito"))
let meses = parseInt(prompt("ingrese la cantidad de cuotas"))
let interes = 27;

cantidadCuotas()


function intereses(){
	
	let inteMen = (interes / 12) / 100;
	
	return inteMen 
	 
}

function cuotas(){ 
	
	let cuotaInt = (credito + (credito * (intereses()*meses)))/meses

	return cuotaInt.toFixed(2)

}



function cantidadCuotas(){
	 console.log("el interes es " + interes + "%");
	 for (let i = 0; i <= meses ; i++){
	 console.log("cuotas nro: " + i )
	 console.log("su cuota es " + cuotas())
	}

}
*/

//practica para scope clase 4
/*
let nombre ="maxi"
console.log(nombre)
function miFuncion (){
	let nombre = "hernan"
	
	if(true){
		let nombre = "belen"
		
	}
}
miFuncion()
*/
/*
// utilizacion de funciones anonimas clase 4
let calcular = document.getElementById("calcular")
calcular.addEventListener("click",function(){
	let numero1 = parseFloat(document.getElementById("numero1").value) 
	let numero2 = parseFloat(document.getElementById("numero2").value) 
	console.log(numero1 + numero2)
})
*/
