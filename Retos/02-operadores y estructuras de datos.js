// operadores aritmeticos 
let suma = 3+3 
let resta = 3-3
let division = 6/2 
let meltiplicacion = 1*3 
let resto = 15%3 

// operadores de comparacion 
let a=5
let b=7 
let comp = true 
comp = a = b // igual a
comp = a > b // mayor que 
comp = a < b // menor que 
comp = a >= b //  mayor o igual que 
comp = a <= b // menor igual que  
comp = a === b // identico a 
comp = a !== b // diferente a 

// operadores de asignacion 

let x = 3 // igualacion 
x += 4 // adicion 
x -= 2 // sustracion 
x *= 1 // multiplicacion 
x /= 2 // division 
x %= 2 // resto 

x++ // incremento 
x-- // decremento

// logicos 
let and = true && and>1 
let or = false || or < 7

// typeof

let typeNumber = 7;
let typeString = "I'm a string";
let typeBoolean = true;
let typeUndef = undefined;
let typeNull = null;
console.log(typeof typeNumber);
console.log(typeof typeString);
console.log(typeof typeBoolean);
console.log(typeof typeUndef);
console.log(typeof typeNull);


// Estructuras de control 
// if else
let color ="rojo"
if (color !== "verde"){
    console.log("no es de color rojo");
} else {
    console.log("si es clor rojo ");
}

//switch
let dia = 2 
switch (dia) {
    case 1:
        console.log('lunes');
        break;
    case 2:
        console.log('martes');
        break;
    case 3:
        console.log('miercoles');
        break;
    case 4:
        console.log('jueves');
        break;
    case 5:
        console.log('viernes');
        break;
    default:
        console.log('dia no encontrado');
        break;
}

// for 
let lista = ['manzana', 'naranja','uva','limon']
for (let i = 0; i < lista.length; i++) {
    console.log(lista[i]);
}

// while 
let counter = 10
while (counter > 0) {
    console.log(counter);
    counter--;
}

// do while
let int = 0
do {
    console.log(int);
    int++;
} while (int <= 5);

// foreach 
let numberList = [1,2,3,4,5,6,7,8,9] 
numberList.forEach(element => {
    element++;
    console.log(element);
});