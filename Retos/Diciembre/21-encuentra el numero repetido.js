const giftIds = [2, 2]
const firstRepeatedId = findFirstRepeated(giftIds);
console.log(firstRepeatedId);

function findFirstRepeated(arr) {
    let aux = [];
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++)
        if (arr[i] === arr[j]) {
          aux.push({ numero: arr[j], index: j });
        }
    }
    if (aux.length == 1) {
        return aux.pop().numero
    } else if (aux.length > 1) {
      let minimos = 0
      let minimo = aux[0].index;
    for (let i = 1; i < aux.length; i++) {
      if (aux[i].index < minimo) {
        minimo = aux[i].index;
      }
      minimos = aux.find((numero) => numero.index == minimo);
    }
      return minimos.numero;
    } else return -1;
  }
  
