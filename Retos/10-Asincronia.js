/*
 * EJERCICIO:
 * Utilizando tu lenguaje, crea un programa capaz de ejecutar de manera
 * asíncrona una función que tardará en finalizar un número concreto de
 * segundos parametrizables. También debes poder asignarle un nombre.
 * La función imprime su nombre, cuándo empieza, el tiempo que durará
 * su ejecución y cuando finaliza.
 *
 * DIFICULTAD EXTRA (opcional):
 * Utilizando el concepto de asincronía y la función anterior, crea
 * el siguiente programa que ejecuta en este orden:
 * - Una función C que dura 3 segundos.
 * - Una función B que dura 2 segundos.
 * - Una función A que dura 1 segundo.
 * - Una función D que dura 1 segundo.
 * - Las funciones C, B y A se ejecutan en paralelo.
 * - La función D comienza su ejecución cuando las 3 anteriores han
 *   finalizado.
 */

const moment = require("moment");

moment.locale('es-mx');
async function task(name, duracion){
    console.log(`task: ${name}  Duracion: ${duracion}s Inicio ${moment().format('LTS')}`);
    await new Promise(resolve =>(setTimeout(resolve,duracion*1000)))
    console.log(`task: ${name}  Duracion: ${duracion}s fin ${moment().format('LTS')}`)
}

//task('tarea 1',5)


(async function () {
    await  Promise.all([
        task('C',10),
        task('B',5),
        task('A',3)
    ])
   await task('D',5)
})()



