/*
Santa Claus 🎅 quiere enmarcar los nombres de los niños buenos para decorar su taller 🖼️,
pero el marco debe cumplir unas reglas específicas. Tu tarea es ayudar a los elfos a generar
este marco mágico.

Reglas:

Dado un array de nombres, debes crear un marco rectangular que los contenga a todos.
Cada nombre debe estar en una línea, alineado a la izquierda.
El marco está construido con * y tiene un borde de una línea de ancho.
La anchura del marco se adapta automáticamente al nombre más largo más un margen de 1 espacio a cada lado.
Ejemplo de funcionamiento:

***************
* midu        *
* madeval     *
* educalvolpz *
***************
*/

console.log(createFrame(['a', 'bb', 'ccc', 'dddd']))

function createFrame(names) {
    let nameLarge = names[0]
    let margen = []
    let cuadro = ""
    for (let i = 0; i < names.length; i++) {
            if(names[i].length>nameLarge.length){
                nameLarge = names[i]
            }
    }
    for (let i = 0; i < nameLarge.length+4; i++) {
        margen.push("*")
    }
    cuadro = margen.join("")+"\n"
    names.forEach(element => {
        const espacios =[]
        let numEspacios = nameLarge.length - element.length
        for(let i =0; i< numEspacios;i++){
            espacios.push(" ")
        }
        const imprimeEspacios = espacios.join("")
        cuadro = cuadro +"* "+element+" "+imprimeEspacios+"*"+"\n"
    });
    cuadro = cuadro+margen.join("")
    return cuadro
  }
