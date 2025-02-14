/*
¡El grinch 👹 ha pasado por el taller de Santa Claus! Y menudo desastre ha montado. Ha cambiado el orden de algunos paquetes, por lo que los envíos no se pueden realizar.

Por suerte, el elfo Pheralb ha detectado el patrón que ha seguido el grinch para desordenarlos. Nos ha escrito las reglas que debemos seguir para reordenar 
los paquetes. Las instrucciones que siguen son:

Recibirás un string que contiene letras y paréntesis.
Cada vez que encuentres un par de paréntesis, debes voltear el contenido dentro de ellos.
Si hay paréntesis anidados, resuelve primero los más internos.
Devuelve el string resultante con los paréntesis eliminados, pero con el contenido volteado correctamente.
Nos ha dejado algunos ejemplos:

*/

console.log(fixPackages('a(b(c))e'))

function fixPackages(packages) {
    if(packages.includes("(") && packages.includes(")"))
    {
    let exitsparent = true
    while (exitsparent === true) {
        let positionone = 0
        let positionend = 0
        let packAux
        for (let i = 0; i < packages.length; i++) {
            if(packages[i]==="("){
                positionone = i
            }
        }
        for (let j = positionone; j < packages.length; j++) {
            if (packages[j] ===")") {
                positionend = j
                let auxArray = packages.slice(positionone+1,positionend)
                let initial = positionend - (positionone)
                packAux = packages.split("")
                auxArray = auxArray.split('').reverse().join('')
                packAux.splice(positionend,1)
                packAux.splice(positionone,initial,auxArray)
                break
            }
        }
        packages = packAux.join('')
        if (!packages.includes("(") && !packages.includes(")")) {
            exitsparent = false
        }
    }
    return packages
    }else return packages 
    
  }
