/*
 * EJERCICIO:
 * Explora el concepto de herencia según tu lenguaje. Crea un ejemplo que
 * implemente una superclase Animal y un par de subclases Perro y Gato,
 * junto con una función que sirva para imprimir el sonido que emite cada Animal.
 *
 * DIFICULTAD EXTRA (opcional):
 * Implementa la jerarquía de una empresa de desarrollo formada por Empleados que
 * pueden ser Gerentes, Gerentes de Proyectos o Programadores.
 * Cada empleado tiene un identificador y un nombre.
 * Dependiendo de su labor, tienen propiedades y funciones exclusivas de su
 * actividad, y almacenan los empleados a su cargo.
 */

class Animal {
    constructor(name,tipo){
        this.tipo = tipo
        this.name = name
    }
    EmitirSonido(){
        console.log('sonido generico de animal');
        
    }
    Saludar() {
        console.log(`hola soy ${this.name} mucho gusto `);
        
    }
}

class Perro extends Animal {
    constructor(name,tipo){
        super(name,tipo)
    }
    EmitirSonido() {
        console.log('los perros ladran ');
        
    }
} 

class Gato extends Animal {
    constructor(name,tipo){
        super(name,tipo)
    }
    EmitirSonido() {
        console.log('los gatos maullan');
    }
} 


let gato1 = new Gato('robbin','peludo')
gato1.EmitirSonido()
let perro1 = new Perro('max', 'husky')
perro1.EmitirSonido()
perro1.Saludar()



class Empleado {
    constructor(id, nombre) {
        this.id = id
        this.nombre = nombre 
        this.empleados = []
    }
    trabajar() {
        console.log(`el empleado ${this.nombre} esta trabajando`);
        
    }

    add(empleado) {
        this.empleados.push(empleado)
    }

    ListaEmpleados(){
        for (const empeado of this.empleados) {
            console.log(empeado.nombre);
        }
    }
}

class Programador extends Empleado {
    constructor(id,nombre,lenguaje) {
        super(id,nombre)
        this.lenguaje = lenguaje
    }

    trabajar(){
        console.log(`el programador ${this.nombre} esta programando en : ${this.lenguaje}`);       
    }

}

class Project_Manager extends Empleado {
    constructor(id,nombre,proyecto) {
        super(id,nombre)
        this.proyecto = proyecto
    }

    trabajar(){
        console.log(`el PM ${this.nombre} esta asignado al proyecto: ${this.proyecto}`);       
    }
}

class Manager extends Empleado {
    constructor(id,nombre,empleado) {
        super(id,nombre)
        this.add(empleado)
    }

    trabajar(){
        console.log(`el PM ${this.nombre} esta acargo de :`);
        this.ListaEmpleados()
    }

}

let programador1 = new Programador(11,'mike','c#')
programador1.trabajar()

let projectManager = new Project_Manager(12,'nikol','proyecto x')
projectManager.trabajar()

let manager = new Manager(13,'wilson',projectManager)
manager.add(programador1)
manager.trabajar()