/*
 * IMPORTANTE: Sólo debes subir el fichero de código como parte del ejercicio.
 *
 * EJERCICIO:
 * Desarrolla un programa capaz de crear un archivo que se llame como
 * tu usuario de GitHub y tenga la extensión .txt.
 * Añade varias líneas en ese fichero:
 * - Tu nombre.
 * - Edad.
 * - Lenguaje de programación favorito.
 * Imprime el contenido.
 * Borra el fichero.
 *
 * DIFICULTAD EXTRA (opcional):
 * Desarrolla un programa de gestión de ventas que almacena sus datos en un 
 * archivo .txt.
 * - Cada producto se guarda en una línea del archivo de la siguiente manera:
 *   [nombre_producto], [cantidad_vendida], [precio].
 * - Siguiendo ese formato, y mediante terminal, debe permitir añadir, consultar,
 *   actualizar, eliminar productos y salir.
 * - También debe poseer opciones para calcular la venta total y por producto.
 * - La opción salir borra el .txt.
 */

/*
const fs = require('fs'); 

fs.writeFileSync('Marionet001.txt', 'Mario Torres Garcia \n 27 años \nprogramador en javascript');

let contend =fs.readFileSync('Marionet001.txt', 'utf-8');
console.log(contend);

fs.unlinkSync('Marionet001.txt');*/



// Crea un archivo con el nombre de usuario y extensión .txt const fileName = 'tu_usuario_github.txt'; fs.writeFileSync(fileName, '');

// Añade varias líneas al archivo const content = [ 'Tu nombre', 'Edad', 'Lenguaje de programación favorito' ]; fs.appendFileSync(fileName, content.join('\n'));

// Imprime el contenido del archivo const fileContent = fs.readFileSync(fileName, 'utf-8'); console.log(fileContent);

// Borra el archivo fs.unlinkSync(fileName);const fs = require('fs'); 

const logProductos = require('fs'); 
const reasline = require('readline');

let venta = 'ventas.txt'
let rl = reasline.createInterface({ 
    input: process.stdin, 
    output: process.stdout
});


function menu(){    
    console.log('1. Añadir producto');
    console.log('2. Consultar producto');
    console.log('3. Actualizar producto');
    console.log('4. Eliminar producto');
    console.log('5. Venta total');
    console.log('6. Salir');
    rl.question('Seleccione una opción: ', (opcion) => {
        switch(opcion){
            case '1':
                addProduct();
                break;
            case '2':
                consultProduct();
                break;
            case '3':
                updateProduct();
                break;
            case '4':
                deleteProduct();
                break;
            case '5':
                totalSale();
                break;
            case '6':
                rl.close();
                break;
            default:
                console.log('Opción no válida');
                menu();
                break;
        }
    });
}


function addProduct(){

    rl.question('Nombre del producto: ', (producto) => {
        rl.question('Cantidad: ', (cantidad) => {
            rl.question('Precio: ', (precio) => {
                logProductos.appendFileSync(venta, `${producto}, ${cantidad}, ${precio} \n`); 
                console.log('Producto añadido');
                menu();
            });
        });
    });
}

function consultProduct(){
    let productos = logProductos.readFileSync(venta, 'utf-8');
    console.log(productos);
    menu();
}   

function updateProduct(){  

    rl.question('Nombre del producto a actualizar: ', (producto) => {   
        let productos = logProductos.readFileSync(venta, 'utf-8');
        let productosArray = productos.split('\n');
        let productoActualizado = false;
        for(let i = 0; i < productosArray.length; i++){
            let productoArray = productosArray[i].split(', ');
            if(productoArray[0] === producto){
                productoActualizado = true;
                rl.question('Cantidad: ', (cantidad) => {
                    rl.question('Precio: ', (precio) => {
                        productosArray[i] = `${producto}, ${cantidad}, ${precio}`;
                        logProductos.writeFileSync(venta, productosArray.join('\n'));
                        console.log('Producto actualizado');
                        menu();
                    });
                });
            }
        }
        if(!productoActualizado){
            console.log('Producto no encontrado');
            menu();
        }
    })
}

function deleteProduct(){
    rl.question('Nombre del producto a eliminar: ', (producto) => {
        let productos = logProductos.readFileSync(venta, 'utf-8');
        let productosArray = productos.split('\n');
        let productoEliminado = false;
        for(let i = 0; i < productosArray.length; i++){
            let productoArray = productosArray[i].split(', ');
            if(productoArray[0] === producto){
                productoEliminado = true;
                productosArray.splice(i, 1);
                logProductos.writeFileSync(venta, productosArray.join('\n'));
                console.log('Producto eliminado');
                menu();
            }
        }
        if(!productoEliminado){
            console.log('Producto no encontrado');
            menu();
        }
    });
}
function totalSale(){
    let productos = logProductos.readFileSync(venta, 'utf-8');
    let productosArray = productos.split('\n');
    let total = 0;
    for(let i = 0; i < productosArray.length; i++){
        let productoArray = productosArray[i].split(', ');
        total += parseInt(productoArray[1]) * parseFloat(productoArray[2]);
    }
    console.log(`Venta total: ${total}`);
    menu();
}



menu()
/*
let formulario  = document.querySelector('form');

formulario.addEventListener('submit', (e) =>{
    e.preventDefault();
    let producto = document.querySelector('#producto').value
    let cantidad = document.querySelector('#cantidad').value
    let precio = document.querySelector('#precio').value
    logProductos.appendFileSync('productos.txt', `${producto}, ${cantidad}, ${precio} \n`); 
    console.log('productos.txt', `${producto}, ${cantidad}, ${precio} \n`);
})*/



