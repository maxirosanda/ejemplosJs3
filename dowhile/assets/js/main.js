/*
// Preguntamos el nombre del cliente.
const nombre = prompt('Ingrese su nombre');
alert(`Hola ${nombre}, bienvenido a la peluquería de Don Mateo`);

// Le ofrecemos los tipos de corte disponibles.
let corte= prompt('¿Qué tipo de corte desea? (Para corte masculino: 1, para corte femenino: 2)');

// Defininos la variable precio de cortes para que sea global (Fuera del bucle).
let precioTotal = 0;

// Bucle para asignar precios por corte elegido, si elijo un corte no disponible, se repite el bucle.
do{

     if(corte == 1){
        precioTotal = 500;
        alert(`El precio total del corte es de ${precioTotal}`);
    }else if(corte == 2){
        precioTotal = 900;
        alert(`El precio total del corte es de ${precioTotal}`);
    } else {
        alert('El corte no existe');
        corte = prompt('¿Qué tipo de corte desea? (Para corte masculino: 1, para corte femenino: 2)');
    }

} while(corte != 1 && corte != 2);
*/