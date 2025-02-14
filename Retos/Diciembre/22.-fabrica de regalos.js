/*En el taller de Santa, los elfos tienen una lista de regalos que desean fabricar y 
un conjunto limitado de materiales.
Los regalos son cadenas de texto y los materiales son caracteres. Tu tarea es escribir
 una función que, dada una lista de regalos y los materiales disponibles, devuelva una lista 
 de los regalos que se pueden fabricar.

Un regalo se puede fabricar si contamos con todos los materiales necesarios para fabricarlo.*/

const gifts = ['tren', 'oso', 'pelota']
const materials = 'tronesa'


manufacture(gifts,materials)
function manufacture(gifts, materials) {
    const ArrayAux = []
    const ArrMaterials = materials.split("")
        for (let i = 0; i < gifts.length; i++) {
                let ArrayGift = gifts[i].split("")
                const ArrayGiftMaterial = []
                    for (let j = 0; j < ArrayGift.length; j++) {
                       // console.log(ArrayGift[j]);
                        let ban = ArrMaterials.find(letra => letra ==ArrayGift[j])
                            if(ban !== undefined){
                                ArrayGiftMaterial.push(ban)
                            }
                    }
                if(JSON.stringify(ArrayGiftMaterial) === JSON.stringify(ArrayGift)){
                    ArrayAux.push(ArrayGiftMaterial.join().replace(/,/g, ''))
                }
                
        }        
    return ArrayAux
  }
