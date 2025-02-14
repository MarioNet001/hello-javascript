/*
Ya hemos empaquetado cientos de regalos 🎁… pero a un elfo se le ha olvidado revisar si el regalo, representado por un asterisco *,
 está dentro de la caja.

La caja tiene un regalo (*) y cuenta como dentro de la caja si:

Está rodeada por # en los bordes de la caja.
El * no está en los bordes de la caja.
Ten en cuenta entonces que el * puede estar dentro, fuera o incluso no estar. Y debemos devolver true si el * está dentro de la
 caja y false en caso contrario.
*/
  const regalo = [
    "#####",
    "#   #",
    "#   #",
    "#   #*",
    "#####"
  ]

  const l = inBox(regalo)

  console.log(l);
function inBox(box) {
  boolean = false
  large = box.length
  long = box[0].length
    for (let i = 0; i < box.length; i++) {
      long = box[i].length
      large = i
      position = box[i]
      if(large ===0 || large === box.length-1){
        console.log(position);
        if(position.includes('*')){ return false}
      }else{
        for (let j = 0; j < position.length; j++) {
          if(position[j]==='*' && (j ===0 || j === position.length-1)){
            return false
          }else{
            if(position[j]==='*'&& (j !==0 || j !== position.length-1) ){
              return true
            }
          }
        }
      }
      
    }
    return boolean
  }

  