/*
 * EJERCICIO:
 * Utilizando tu lenguaje, explora el concepto de expresiones regulares,
 * creando una que sea capaz de encontrar y extraer todos los números
 * de un texto.
 *
 * DIFICULTAD EXTRA (opcional):
 * Crea 3 expresiones regulares (a tu criterio) capaces de:
 * - Validar un email.
 * - Validar un número de teléfono.
 * - Validar una url.
 */

let text = 'cuando hay 3 o mas pajaros fuera del nido 1 de cada 5 huevos suelen ser comidos por 2 mas'
let regexp1 =  /\d+/g
let numnumbers = text.match(regexp1)

console.log(text);
console.log(numnumbers );


const regexEmail = /^[a-zA-Z0-9.]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/
const regexTelefono = /^[0-9]{9}$/
const regexUrl = /^(https?:\/\/|ftp:\/\/)[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}.*$/

const texts = "El gato, el perro y el pato.";
const regexp = /.a.o/g;

texts.search(regexp);   // 3, porque la primera coincidencia ocurre en la posición 3 (gato)
console.log(texts.match(regexp));
