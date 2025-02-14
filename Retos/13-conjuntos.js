/*
 * EJERCICIO:
 * Utilizando tu lenguaje crea un conjunto de datos y realiza las siguientes
 * operaciones (debes utilizar una estructura que las soporte):
 * - Añade un elemento al final.
 * - Añade un elemento al principio.
 * - Añade varios elementos en bloque al final.
 * - Añade varios elementos en bloque en una posición concreta.
 * - Elimina un elemento en una posición concreta.
 * - Actualiza el valor de un elemento en una posición concreta.
 * - Comprueba si un elemento está en un conjunto.
 * - Elimina todo el contenido del conjunto.
 *
 * DIFICULTAD EXTRA (opcional):
 * Muestra ejemplos de las siguientes operaciones con conjuntos:
 * - Unión.
 * - Intersección.
 * - Diferencia.
 * - Diferencia simétrica.
 */



let conjuntoA = [1,2,3,4,5,6]

conjuntoA.push(2.5)

conjuntoA.unshift(0.5)

conjuntoA.push(10,2,3,11,24)
console.log(conjuntoA);
//elimina un elemento en una posicion concreta 
conjuntoA.splice(1,1)
console.log(conjuntoA);

//actualiza el valor de un elemento en una posicion concreta
conjuntoA[2] = 6
//comprueba si un elemento esta en un conjunto
console.log(conjuntoA.find(element => element === 6))
// elimina todo el conjunto 
conjuntoA = []


// DIFICULTAD EXTRA (opcional):

let conjuntoB = new Set([1,2,3,4,5,6])
let conjuntoC = new Set([1,2,3,4,8,9])



//union 
let union = new Set([...conjuntoB, ...conjuntoC])
console.log(union);
// intersection 
let intersection  = new Set([...conjuntoB].filter(x => conjuntoC.has(x)))
console.log(intersection);

//difference
let difference = new Set([...conjuntoB].filter(x => !conjuntoC.has(x)))
console.log(difference);

//symmetric difference
let symmetricDifference = new Set([
                            ...[...conjuntoB].filter(x => !conjuntoC.has(x)),
                            ...[...conjuntoC].filter(x => !conjuntoB.has(x)) ])

console.log(symmetricDifference);

