class Persona {
    constructor(nombre, edad, nacionalidad ) {
        this.nombre = nombre;
        this.edad = edad; 
        this.nacionalidad = nacionalidad;
    }
    saludar(){
        console.log("hola mi nombre es: "+this.nombre + " y mi nacionalidad : " + this.nacionalidad);
    }
}

const persona1 = new Persona("Mario ",27,"Mexicano"); 
const persona2 = new Persona("Juan ",28,"Colombiano"); 
console.log(persona1);
console.log(persona2); 
persona2.saludar();




class Animal  {
    constructor(nombre, tipo){
        this.nombre = nombre;
        this.tipo = tipo;
    }
    saluda(){
        console.log(`hola soy ${this.nombre} `);
    }
    habla(){
        console.log("Ruido de animal");
    }   
}

class Perro extends Animal {
    constructor(nombre,tipo, raza){
        super(nombre,tipo);
        this.raza = raza;
    }

    habla(){ console.log("los perros ladran ");}
}

const perro1 = new Perro("will","perro","dogo") 
console.log(perro1);
perro1.habla();