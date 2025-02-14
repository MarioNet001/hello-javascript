/*
Santa Claus 🎅 está revisando el inventario de su taller para preparar la entrega de regalos.
 Los elfos han registrado los juguetes en un array de objetos, pero la información está un poco
  desordenada. Necesitas ayudar a Santa a organizar el inventario.

Recibirás un array de objetos, donde cada objeto representa un juguete y tiene las propiedades:

name: el nombre del juguete (string).
quantity: la cantidad disponible de ese juguete (entero).
category: la categoría a la que pertenece el juguete (string).
Escribe una función que procese este array y devuelva un objeto que organice los juguetes
 de la siguiente manera:

Las claves del objeto serán las categorías de juguetes.
Los valores serán objetos que tienen como claves los nombres de los juguetes y como
 valores las cantidades totales de cada juguete en esa categoría.
Si hay juguetes con el mismo nombre en la misma categoría, debes sumar sus cantidades.
Si el array está vacío, la función debe devolver un objeto vacío {}.

*/

const inventory = [
    { name: 'doll', quantity: 5, category: 'toys' },
    { name: 'car', quantity: 3, category: 'toys' },
    { name: 'ball', quantity: 2, category: 'sports' },
    { name: 'car', quantity: 2, category: 'toys' },
    { name: 'racket', quantity: 4, category: 'sports' }
  ]

  const inventory2 = [
    { name: 'book', quantity: 10, category: 'education' },
    { name: 'book', quantity: 5, category: 'education' },
    { name: 'paint', quantity: 3, category: 'art' }
  ]

console.log(organizeInventory(inventory2))

function organizeInventory(inventory) {
    const categorys = []
    inventory.forEach(element => {
        categorys.push(element.category)
    })
    const categorySet = new Set(categorys)
    const categoryOrder = [...categorySet]
    const inventoryOrder = {}
    for (let i = 0; i < categoryOrder.length; i++) {
        const auxCategory = {}
        inventory.forEach(gift =>{
            if(categoryOrder[i] === gift.category){
                if (inventoryOrder[categoryOrder[i]] !== undefined) {
                    const nameToy = gift.name
                    if(gift.name in inventoryOrder[categoryOrder[i]]){
                        const suma = gift.quantity + inventoryOrder[categoryOrder[i]][nameToy]
                        auxCategory[gift.name] = suma
                    }else {
                        auxCategory[gift.name] = gift.quantity
                    }
                }else {
                    auxCategory[gift.name] = gift.quantity
                }
                
            }
            inventoryOrder[categoryOrder[i]] = auxCategory 
        })
    }
    return inventoryOrder
  }