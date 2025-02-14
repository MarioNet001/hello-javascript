/*
Los elfos están jugando con un tren 🚂 mágico que transporta regalos. Este tren se mueve
 en un tablero representado por un array de strings.

El tren está compuesto por una locomotora (@), seguida de sus vagones (o), y debe recoger
 frutas mágicas (*) que le sirve de combustible. El movimiento del tren sigue las 
 siguientes reglas:

Recibirás dos parámetros board y mov.

board es un array de strings que representa el tablero:

@ es la locomotora del tren.
o son los vagones del tren.
* es una fruta mágica.
· son espacios vacíos.
mov es un string que indica el próximo movimiento del tren desde la cabeza del tren @:

'L': izquierda
'R': derecha
'U': arriba
'D': abajo.
Con esta información, debes devolver una cadena de texto:

'crash': Si el tren choca contra los bordes del tablero o contra sí mismo.
'eat': Si el tren recoge una fruta mágica (*).
'none': Si avanza sin chocar ni recoger ninguna fruta mágica.
*/

const board = [
    '·····',
    '*····',
    '@····',
    'o····',
    'o····'
  ]
  
  console.log(moveTrain(board, 'L'))
  function moveTrain(board, mov) {
    let indexX = 0
    let indexY = 0 
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if(board[i][j] === "@"){
                indexX = i
                indexY = j
                break
            }
        }
    }
    let move = 0
    switch (mov) {
        case "U":
            move = board[indexX-1][indexY]
            if (move === undefined) {
                move ="o"
            }
            switch(move){
        case "o":
            return "crash"
        case "*":
            return "eat"
        case "·":
            return "none"
        }
        case "D":
            move = board[indexX+1][indexY]
            if (move === undefined) {
                move ="o"
            }
              switch(move){
        case "o":
            return "crash"
        case "*":
            return "eat"
        case "·":
            return "none"
            }
        case "R":
            move = board[indexX][indexY+1]
            if (move === undefined) {
                move ="o"
            }
              switch(move){
        case "o":
            return "crash"
        case "*":
            return "eat"
        case "·":
            return "none"
            }
            break
        case "L":
            move = board[indexX][indexY-1]
            if (move === undefined) {
                move ="o"
            }
              switch(move){
        case "o":
            return "crash"
        case "*":
            return "eat"
        case "·":
            return "none"
            }
            break
        default:
            break;
    }    
  }
