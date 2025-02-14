/*
 * EJERCICIO:
 * Explora el concepto de callback en tu lenguaje creando un ejemplo
 * simple (a tu elección) que muestre su funcionamiento.
 *
 * DIFICULTAD EXTRA (opcional):
 * Crea un simulador de pedidos de un restaurante utilizando callbacks.
 * Estará formado por una función que procesa pedidos.
 * Debe aceptar el nombre del plato, una callback de confirmación, una
 * de listo y otra de entrega.
 * - Debe imprimir un confirmación cuando empiece el procesamiento.
 * - Debe simular un tiempo aleatorio entre 1 a 10 segundos entre
 *   procesos.
 * - Debe invocar a cada callback siguiendo un orden de procesado.
 * - Debe notificar que el plato está listo o ha sido entregado.
 */

// Solución:
// Ejemplo simple de callback
function saludar(nombre, callback) {
  console.log(`Hola, ${nombre}!`);
  callback();
}
saludar('Mundo', () => console.log('Adiós!'));

// Simulador de pedidos de un restaurante
async function pedidos(plato,confirmacion,listo,entrega){
    console.log(`pedido: ${plato} `);
    await new Promise(resolve =>(setTimeout(resolve,Math.floor(Math.random()*10)*1000)))
    confirmacion(plato)
    await new Promise(resolve =>(setTimeout(resolve,Math.floor(Math.random()*10)*1000)))
    listo(plato)
    await new Promise(resolve =>(setTimeout(resolve,Math.floor(Math.random()*10)*1000)))
    entrega(plato)
}


function confirmacion(plato) {
    console.log(`pedido ${plato} confirmado XD`);
    
}

function listo(plato) {
    console.log(`pedido ${plato} listo X)`);
}

function entregadi(plato) {
    console.log(`pedido ${plato} entregado :)`);
}

 function main() {
    pedidos('bacalao',confirmacion,listo,entregadi)
    pedidos('pizza',confirmacion,listo,entregadi) 
    pedidos('pozole',confirmacion,listo,entregadi)

}

main()
