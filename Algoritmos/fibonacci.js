
function fibo(n) {
    if (n <= 1) {
        return n
    } else {
        return (fibo(n-1) + fibo(n-2))
    }
}


function iteractionPrint(n){
    for (let index = 0; index < n; index++) {
        console.log(fibo(index));
        
    }
}

let number = 10
iteractionPrint(number)


let cadena = "anita lava la tina"
let sinespacios = cadena.trim()
console.log(sinespacios)
function palindromo(cadena) {
    cadena = cadena.trim()
    let aux = cadena.split('').reverse().join('')
    console.log(cadena);
    console.log(aux);
    
    
}

palindromo(cadena)