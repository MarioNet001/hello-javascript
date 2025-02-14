/*
Santa Claus 🎅 ha recibido una lista de números mágicos que representan regalos 🎁, 
pero algunos de ellos están duplicados y deben ser eliminados para evitar confusiones. Además,
 los regalos deben ser ordenados en orden ascendente antes de entregárselos a los elfos.
Tu tarea es escribir una función que reciba una lista de números enteros (que pueden incluir duplicados)
 y devuelva una nueva lista sin duplicados, ordenada en orden ascendente.
*/

const gifts1 = [6, 5, 5, 5, 5]
const preparedGifts1 = prepareGifts(gifts1)
console.log(preparedGifts1)

function prepareGifts(gifts) {

        const setGifts = new Set(gifts)
        const newgifts = [...setGifts]
        const giftsOrder = newgifts.sort((a, b) => a - b)
    return giftsOrder
  }
  