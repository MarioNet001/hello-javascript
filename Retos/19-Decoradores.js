/*
 * EJERCICIO:
 * Explora el concepto de "decorador" y muestra cómo crearlo
 * con un ejemplo genérico.
 *
 * DIFICULTAD EXTRA (opcional):
 * Crea un decorador que sea capaz de contabilizar cuántas veces
 * se ha llamado a una función y aplícalo a una función de tu elección.
 */

function Contador(fn){
    let contador = 0
    return function(){
        contador++
        console.log(`La funcion ${fn.name} ha sido llamada ${contador} veces`)
        return fn.apply(this,arguments)
    }
}  


function tiempo(fn) {
    return function(){
        let timeInicio = performance.now()
        let result = fn.apply(this,arguments)
        let timeFin = performance.now()
        console.log(`La funcion ${fn.name} ha tardado ${timeFin-timeInicio} ms`)
        return result
    }
}

function suma(a,b){
    return a+b
}

function Suma10Random(){
    for (let i = 0; i < 10; i++) {
        console.log(suma(Math.floor(Math.random()*10),Math.floor(Math.random()*10)));
    }
}
let sumaDecorada = Contador(suma)
let sumaDecoradaTiempo = tiempo(suma)
let randomsumTiempo = tiempo(Suma10Random)
//suma(2,3)
//sumaDecorada(1,2)
sumaDecoradaTiempo(2,4)
sumaDecorada(2,4)
randomsumTiempo()
