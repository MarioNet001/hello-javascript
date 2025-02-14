/*
 * EJERCICIO:
 * Utilizando tu lenguaje, emplea 3 mecanismos diferentes para imprimir
 * números del 1 al 10 mediante iteración.
 *
 * DIFICULTAD EXTRA (opcional):
 * Escribe el mayor número de mecanismos que posea tu lenguaje
 * para iterar valores. ¿Eres capaz de utilizar 5? ¿Y 10?
 */



// 1. For loop
console.log('++++++++ for +++++++++');
for (let i = 1; i < 11; i++) {
    console.log(i);
}
console.log('++++++++ while +++++++++');

// 2. While loop
let aux = 1
while (aux<=10) {
    console.log(aux);
    aux++
}
// 3 recursividad 
console.log('++++++++ recursividad +++++++++');
let aux2 =1
const  print10 = ()=>{
    if(aux2<=10){
        console.log(aux2);
        aux2 ++
        print10()
    }else{
        return
    }
}
print10()

// 4. Do while loop
console.log('++++++++ do While +++++++++');
aux = 1
do {
    console.log(aux);
    aux ++
} while (aux<=10);
// 5. For each loop
console.log('++++++++ foreach +++++++++');
let array = [1,2,3,4,5,6,7,8,9,10]
array.forEach(element => {
    console.log(element);
    
});
// 6. For in loop
console.log('++++++++ for in +++++++++');
for (const key in array) {
    console.log(array[key]);
    
}
// 7. for of
console.log('++++++++ for of +++++++++');
let numbers = {
    a:1,b:2,c:3,d:4,e:5,f:6,h:7,i:8,j:9,l:10
}
for (const element of array) {
    console.log(element);
    
}
console.log('++++++++ for in objeto +++++++++');
// 8 for in objeto
for (const key in numbers) {
    if (Object.prototype.hasOwnProperty.call(numbers, key)) {
        const element = numbers[key];
        console.log(element);
        
    }
}
// 9. Map
console.log('++++++++ map +++++++++');
let newArray = array.map((elment)=>{
    console.log(elment);
})
// 10. Filter

console.log('++++++++ for String +++++++++');
for (num of '1234566789'){
    console.log(num);
    
}