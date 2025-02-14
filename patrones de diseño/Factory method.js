// Imagina una tienda en línea que vende diferentes tipos de mascotas 
// (perros, gatos, peces). Cada mascota tiene características y necesidades 
// específicas (alimentación, cuidados, etc.). En lugar de instanciar directamente
//  cada tipo de mascota, utilizaremos un patrón Factory Method para encapsular la lógica de creación y proporcionar 
//  una interfaz unificada para crear diferentes tipos de mascotas.


// Crea una clase abstracta llamada Mascota que contenga los siguientes métodos:


class Pet {
    constructor(name, type) {
        this.name = name;
        this.type = type;
        
    }

    eat() {
        console.log(`${this.name} the ${this.type} is eating`);
        
    }
    makeSound() {
        console.log(`${this.name}  is making sound`);
    }   
}

class Dog extends Pet {
    constructor(name) {
        super(name, 'Dog');
    }
    makeSound() {
        console.log(`${this.name} is barking`);
    }
}

class Cat extends Pet {
    constructor(name) {
        super(name, 'Cat');
    }
    makeSound() {
        console.log(`${this.name} is meowing`);
    }
} 

class Fish extends Pet {
    constructor(name) {
        super(name, 'Fish');
    }
    makeSound() {
        console.log(`${this.name} is swimming`);
    }
}


class PetFactory {
    craetePrt (type, name){
        switch (type) {
            case 'dog':
                return new Dog(name)
            case 'cat':
                return new Cat(name)
            case 'fish':
                return new Fish(name)
            default:
                console.log('no encontrado');
                break;
        }
    }
}

let petfactory = new PetFactory()
let dog1 = petfactory.craetePrt('dog','pupi')
let cat1 = petfactory.craetePrt('cat','kali')
let fish = petfactory.craetePrt('fish','gupy')

dog1.makeSound()
cat1.makeSound()
fish.eat()

