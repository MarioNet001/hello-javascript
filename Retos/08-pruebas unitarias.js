/*
 * EJERCICIO:
 * Crea una función que se encargue de sumar dos números y retornar
 * su resultado.
 * Crea un test, utilizando las herramientas de tu lenguaje, que sea
 * capaz de determinar si esa función se ejecuta correctamente.
 *
 * DIFICULTAD EXTRA (opcional):
 * Crea un diccionario con las siguientes claves y valores:
 * "name": "Tu nombre"
 * "age": "Tu edad"
 * "birth_date": "Tu fecha de nacimiento"
 * "programming_languages": ["Listado de lenguajes de programación"]
 * Crea dos test:
 * - Un primero que determine que existen todos los campos.
 * - Un segundo que determine que los datos introducidos son correctos.
 */

// const assert = require('chai').assert;
// //let {suma} = require('../08-pruebas unitarias');

// describe('suma', function(){
//     it('suma de dos numeros', function(){
//         assert.equal(suma(2,3), 5);
//     });
//     it('suma un numero negativo', function(){     
//         assert.equal(suma(-2,3), 1);
//     });
//     it('suma dos numeros negativos', function(){
//         assert.equal(suma(-2,-3), -5);
//     });
//     it ('suma un numero decimal', function(){
//         assert.equal(suma(2.5,3), 5.5);
//     });
// });

function suma(a,b){
    return a+b 
}


function testsuma(describeTest,result ){
    let resultado = suma(describeTest.a, describeTest.b);
    if (resultado === result){
        console.log('Test correcto');
    } else {
        console.log('Test incorrecto');
    }
}

let parametros = {
    a : 5,
    b: 5
}

testsuma(parametros,10)


// extra

Data = {
    name: 'Mario torres',
    age: 27,
    bitday_date: '10-08-1996',
    lenguajes : ['javascipt, c#, CSS']
}



class Test {

    existAllData(data){        
        for (const key in data) {
            if (data[key] === undefined){
                console.log('Test incorrecto');
                return false;
            }else{
                console.log('Test correcto');
                return true;
            }       
        }
    }

    corectData(data){
        if( typeof(data.name) !== 'string'  ){
            console.log('nombre incorrecto');
            return false
        }if (typeof(data.age) !== 'number') {
            console.log('edad incorrecta');
            return false
        }if (typeof(data.bitday_date) !== 'string') {
            console.log('cumpleanos incorrecto');
            return false
        }if(typeof(data.lenguajes)!=="object"){
            console.log('lenguajes incorrectos');
            return false
        }else{
            console.log('datos correctos');
            return true
        }
    }

}
let test = new Test()

test.existAllData(Data) 
test.corectData(Data)
