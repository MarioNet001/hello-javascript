// crea una funcion que devuelva si un texto es palindromo o no

function palindromo(text) {
    text = text.toLowerCase().replace(/ /g, '');
    let reverstext = text.split('').reverse().join('');
    console.log(reverstext);
    return reverstext === text
}

console.log(palindromo('Arriba la birra'));
