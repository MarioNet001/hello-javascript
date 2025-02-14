
//pilas stack (LIFO)
let stack = []
stack.push(1,2,3,4,5)
console.log(stack);
stack.pop()
console.log(stack);

//cola qeue (FIFO)
let qeue = []
qeue.push(1,2,3,4,5)
console.log(qeue);
qeue.shift()
console.log(qeue); 


// ejercicio crea un paginador para navegar por los directorios 
/*
let pila =[]
let memory = []
let select
function isEmpyPilla() {
    return pila.length === 0
}
do {
    select = prompt("Introduzca la acción a realizar:  (adelante/atras/salir  )"); 
    
    switch (select) {
        case "adelante":
            if (isEmpyPilla()) {
                console.log("no hay datos que mostrar");
            } else {
                console.log(memory[pila.length +1]);
            }
            break;
        case "atras":
            if (isEmpyPilla()) {
                console.log("no hay datos que mostrar");
            } else {
                pila.pop()
                console.log(pila[pila.length-1])
            }
            break;
        case "salir":
            console.log("Saliendo ......");
            select ="exit"
            break;
        default:
            console.log(select);
            pila.push(select)
            memory.push(select)
            break;
    }


} while (select !== "exit"); 
*/

// imprimir las peticiones de una impresora con varios documentos en cola          this.items.push(element)

