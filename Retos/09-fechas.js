/*
 * EJERCICIO:
 * Crea dos variables utilizando los objetos fecha (date, o semejante) de tu lenguaje:
 * - Una primera que represente la fecha (día, mes, año, hora, minuto, segundo) actual.
 * - Una segunda que represente tu fecha de nacimiento (te puedes inventar la hora).
 * Calcula cuántos años han transcurrido entre ambas fechas.
 *
 * DIFICULTAD EXTRA (opcional):
 * Utilizando la fecha de tu cumpleaños, formatéala y muestra su resultado de
 * 10 maneras diferentes. Por ejemplo:
 * - Día, mes y año.
 * - Hora, minuto y segundo.
 * - Día de año.
 * - Día de la semana.
 * - Nombre del mes.
 * (lo que se te ocurra...)
 * 
 */

const moment = require("moment");

let fechaActual = new Date();
let fechaNacimiento = new Date('1996-08-10T00:00:00');
let fecha = new Date('1996-08-10');
console.log(fechaActual);
console.log(fechaNacimiento);
console.log(fecha);


function calcularEdad(fechaActual, fechaNacimiento){
    let edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
    if(fechaActual.getMonth() < fechaNacimiento.getMonth()){
        edad--;
    }else if(fechaActual.getMonth() === fechaNacimiento.getMonth() && fechaActual.getDate() < fechaNacimiento.getDate()){
        edad--;
    }
    return edad;
}

console.log(calcularEdad(fechaActual, fechaNacimiento));

console.log(fechaNacimiento.toLocaleDateString());

// utilizando la libreria de moment
moment.locale('es-mx');
console.log(moment(fechaNacimiento).format('LLLL'));
console.log(moment(fechaActual).format('MM DD YYYY'));
console.log(moment(fechaActual).format('DD/MM/YYYY'));
console.log(moment(fechaActual).format('L'));
console.log(moment(fechaNacimiento).fromNow());
console.log(moment().add(7, 'days').calendar());
