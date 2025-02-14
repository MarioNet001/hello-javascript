/*
 * IMPORTANTE: Sólo debes subir el fichero de código como parte del ejercicio.
 *
 * EJERCICIO:
 * Desarrolla un programa capaz de crear un archivo XML y JSON que guarde los
 * siguientes datos (haciendo uso de la sintaxis correcta en cada caso):
 * - Nombre
 * - Edad
 * - Fecha de nacimiento
 * - Listado de lenguajes de programación
 * Muestra el contenido de los archivos.
 * Borra los archivos.
 *
 * DIFICULTAD EXTRA (opcional):
 * Utilizando la lógica de creación de los archivos anteriores, crea un
 * programa capaz de leer y transformar en una misma clase custom de tu 
 * lenguaje los datos almacenados en el XML y el JSON.
 * Borra los archivos.
 */

const fs = require('fs');   
const jsonfile = require('jsonfile');
const xml2js = require('xml2js');


let datos = {
    nombre: 'mario torres garcia',
    edad: 27,
    fechaNacimiento: '1993-01-01',
    lenguajes: {
        iteam1: 'javascript',
        iteam2: 'python',
        iteam3: 'java',
    }
}


let xml = new xml2js.Builder().buildObject(datos);
fs.writeFileSync('datos.xml', xml);
let contXml = fs.readFileSync('datos.xml', 'utf-8');
console.log(contXml);   

//fs.unlinkSync('datos.xml');

jsonfile.writeFileSync('datos.json', datos);
let contJson = fs.readFileSync('datos.json', 'utf-8');
let contJsonParse = JSON.parse(contJson);
console.log(contJsonParse); 
//fs.unlinkSync('datos.json');

class Persona {
    constructor(name,edad,fechaNacimiento,lenguajes){
        this.name = name;
        this.edad = edad;
        this.fechaNacimiento = fechaNacimiento;
        this.lenguajes = lenguajes;
    }
}

let personaJSON = new Persona(contJsonParse.nombre, contJsonParse.edad, contJsonParse.fechaNacimiento, contJsonParse.lenguajes);
console.log('=================creando una clase con JSON====================');
console.log(personaJSON);

let nombre = contXml.split('<nombre>')[1].split('</nombre>')[0];
let edad = contXml.split('<edad>')[1].split('</edad>')[0];
let fechaNacimiento = contXml.split('<fechaNacimiento>')[1].split('</fechaNacimiento>')[0];
let lenguajes = contXml.split('<lenguajes>')[1].split('</lenguajes>')[0];   
let personaXML = new Persona(nombre,edad,fechaNacimiento,lenguajes);

console.log('=================creando una clase con XML====================');
console.log(personaXML);

