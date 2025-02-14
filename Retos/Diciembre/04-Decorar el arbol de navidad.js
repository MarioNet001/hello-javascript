/*
¡Es hora de poner el árbol de Navidad en casa! 🎄 Pero este año queremos que
sea especial. Vamos a crear una función que recibe la altura del árbol
(un entero positivo entre 1 y 100) y un carácter especial para decorarlo.

La función debe devolver un string que represente el árbol de Navidad,
 construido de la siguiente manera:
El árbol está compuesto de triángulos de caracteres especiales.
Los espacios en blanco a los lados del árbol se representan con guiones
 bajos _.
Todos los árboles tienen un tronco de dos líneas, representado por el carácter #.
El árbol siempre debe tener la misma longitud por cada lado.
Debes asegurarte de que el árbol tenga la forma correcta usando saltos de línea \n para cada línea.
*/
/*
____*____
___***___
__*****__
_*******_
*********
____#____
____#____
*/
const tree = createXmasTree(6, '@')
console.log(tree);

function createXmasTree(height, ornament) {
    const tree = []
    const tronco = []
    let printTree = ""
    for(let i = height;i>0;i--){
        let espacioIzq=[]
        let arbol =[]
        for (let izq = i-1; izq>0; izq--){
            espacioIzq.push("_")
        }
        for(let rama = i-1;rama<height;rama++){
            arbol.push(ornament)
        }
        if (i===height) {
            tree.push(espacioIzq.join("")+arbol.join("")+espacioIzq.join(""))
            tronco.push(espacioIzq.join("")+"#"+espacioIzq.join(""))
        }else{
            arbol.pop()
            tree.push(espacioIzq.join("")+arbol.join("")+ornament+arbol.join("")+espacioIzq.join(""))
        }
        
    }
    tree.forEach(element => {
        printTree = printTree+element+"\n"
    });
    printTree = printTree+tronco.join("")+"\n"
    printTree = printTree+tronco.join("")

    return printTree
  }