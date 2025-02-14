/*
Los elfos 🧝🧝‍♂️ de Santa Claus han encontrado un montón de botas mágicas desordenadas
 en el taller. Cada bota se describe por dos valores:
type indica si es una bota izquierda (I) o derecha (R).
size indica el tamaño de la bota.
Tu tarea es ayudar a los elfos a emparejar todas las botas del mismo
 tamaño que tengan izquierda y derecha. Para ello, debes devolver una
  lista con los pares disponibles después de emparejar las botas.

¡Ten en cuenta que puedes tener más de una zapatilla emparejada del mismo 
tamaño!
*/


  const shoes = [
    { type: 'I', size: 38 },
    { type: 'R', size: 38 },
    { type: 'R', size: 42 },
    { type: 'I', size: 41 },
    { type: 'I', size: 42 }
  ]

  const shoes2 = [
    { type: 'I', size: 38 },
    { type: 'R', size: 38 },
    { type: 'I', size: 38 },
    { type: 'R', size: 38 }
  ]

  const shoes3 = [
    { type: 'I', size: 38 },
    { type: 'R', size: 38 },
    { type: 'R', size: 38 }
  ]
  console.log(organizeShoes(shoes3))
  
  function organizeShoes(shoes) {
    const botasPorTamano = {};
  // Agrupamos las botas por tamaño
  shoes.forEach(bota => {
    const { type, size } = bota;
    if (!botasPorTamano[size]) {
      botasPorTamano[size] = { I: [], R: [] };
    }
    botasPorTamano[size][type].push(bota);
    
  });

  // Creamos una lista para almacenar los pares
  const pares = [];
  const valor =[]
  // Iteramos sobre cada tamaño y emparejamos las botas
  for (const tamano in botasPorTamano) {
    const botasDelTamano = botasPorTamano[tamano];
    while (botasDelTamano.I.length > 0 && botasDelTamano.R.length > 0) {
      pares.push([botasDelTamano.I.pop(), botasDelTamano.R.pop()]);
    }

  }
  pares.forEach(par =>{
    valor.push(par[0].size)
  })
  return valor;
}
