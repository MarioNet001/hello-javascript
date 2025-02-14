//hay varias formas de crear un array 

const fila = Array("one","two","trhee");
const numbers = [1]; 

console.log(Array.isArray(numbers));
// ejercicio practico se creara lasuseccion de fibonacchi 


const fibonacchi = (limit) =>{
    let array =[1];
    for ( let index = 0; index < limit; index++) {
        if (array.length <= 1) {
            array.push(1);
        } else {
            array.push(array[index]+(array[index-1]))       
    }
    }
    return array
}

console.log(fibonacchi(7));

// metodos de arrays

const letras = ["A","B","C","E"]

// mutables pop, pull y push modifican el array

let newLetras = letras.push("F","G","I") //modifica el array principal
 //devuelve el utimo item del array
let deletLetras = letras.pop() // quita el ultimo item del array 

console.log(letras);
// inmutables  no modifican el array 

const letarasLowcase = letras.map(letra => letra.toLowerCase()) //recorre, aplica modificaciones y devuelve otro array
console.log(letarasLowcase);
letras.forEach(letra =>{ console.log(letra)} ) // lo mismo que map pero sin devolver otro array 
letras.push(1,2,3)
let depuracion = letras.filter(letra => typeof letra ==="string"); // fitra un nuevo array 
console.log(letras);
console.log(depuracion);
let numbersRandom = [2,2,45,6,3,7]
let sum = numbersRandom.reduce((accumulator,num) => accumulator + num ) // reduce el array
console.log(numbersRandom.slice(2,4)); // slice recorta un array 

// spread operator 
let copyArray = [...numbers] //copiar un array
let mergeArray = [...numbers, 2,3,3, ...depuracion] // combina arrays y items 



