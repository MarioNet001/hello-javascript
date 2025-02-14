/*
 * EJERCICIO:
 * Explora el concepto de funciones de orden superior en tu lenguaje 
 * creando ejemplos simples (a tu elección) que muestren su funcionamiento.
 *
 * DIFICULTAD EXTRA (opcional):
 * Dada una lista de estudiantes (con sus nombres, fecha de nacimiento y 
 * lista de calificaciones), utiliza funciones de orden superior para
 * realizar las siguientes operaciones de procesamiento y análisis:
 * - Promedio calificaciones: Obtiene una lista de estudiantes por nombre
 *   y promedio de sus calificaciones.
 * - Mejores estudiantes: Obtiene una lista con el nombre de los estudiantes
 *   que tienen calificaciones con un 9 o más de promedio.
 * - Nacimiento: Obtiene una lista de estudiantes ordenada desde el más joven.
 * - Mayor calificación: Obtiene la calificación más alta de entre todas las
 *   de los alumnos.
 * - Una calificación debe estar comprendida entre 0 y 10 (admite decimales).
 */

//Estas son funciones⚙️ que toman una función⚙️ como argumento o devuelven una función⚙️ como salida.

let lista = [1,2,3,4,5]
function sum(a,b) {
    return a+b
}
// map
/*
let lista2 = lista.map((item) => item * 2 )
console.log(typeof(lista.map((item) => item * 2 )))
console.log(typeof(lista));
console.log(typeof(sum));


console.log(lista);
console.log(lista2);


const birthYear = [1975, 1997, 2002, 1995, 1985] 
let age = birthYear.map(year =>2024 - year)
console.log(birthYear);
console.log(age);

// filter
let persons = [
    { name: 'Niki', age: 34 },
    { name: 'Mark', age: 10 },
    { name: 'John', age: 27 },
    { name: 'Jane', age: 14 },
    { name: 'Tony', age: 18 }
    ]

let adult = persons.filter(person =>person.age >= 18)
console.log(adult);

// reduce
let sumtotal = lista.reduce((a,b)=>a+b)

console.log(sumtotal);

// crea tu propia funcion de orden superio como map

function My_map(arry,callback) {
    let newArray = []
    for (let i = 0; i < arry.length; i++) {
        newArray.push(callback(arry[i]))
    }
    return newArray
}

let multiplos = My_map(lista,item => item *2)

console.log(multiplos);

*/
// extra 

let alumnos = [
    {nombre: 'mario',birthYear: 1996, calificaciones: [9,8.5,9.5]},
    {nombre: 'roberto',birthYear: 1999, calificaciones: [5,8.5,7]},
    {nombre: 'braulio',birthYear: 2014, calificaciones: [10,10,10]},
    {nombre: 'julio',birthYear: 2010, calificaciones: [9.5,9,10]},
    {nombre: 'leon',birthYear: 1991, calificaciones: [8,8.5,7]}
]

function promedioEstudiantes (alumnos) {
    let promedios =[]
    alumnos.map(alumno =>{
        let sum = alumno.calificaciones.reduce((a,b) => a+b)
        let prom = sum / alumno.calificaciones.length
        promedios.push({'nombre': alumno.nombre,'birthYear':alumno.birthYear ,'promedio': prom})
    })
    return promedios
}

let Estudiante_promedio = (promedioEstudiantes(alumnos));
console.log(Estudiante_promedio);

function bestEstudent (estudiantes){
    return estudiantes.filter(alumno => alumno.promedio >= 9)
}

console.log(bestEstudent(Estudiante_promedio));

function orderEstudentPromedio(estudiantes) {
       return estudiantes.sort((a,b) => b.promedio - a.promedio)
}
function orderEstudentAge(estudiantes) {
    return estudiantes.sort((a,b) => a.birthYear - b.birthYear)
}

console.log(orderEstudentAge(Estudiante_promedio));
console.log(orderEstudentPromedio(Estudiante_promedio));
