
function countDown(limit) {
    if (limit >= 0) {
        console.log(limit);
        countDown(limit-1 )
    }
}

//countDown(10) 

// fibonacci con recursividad 

const fibonacci = (number) => {
    if (number <= 1) {
        //console.log("no se aceptan numeros menores a 1");
        return number
    }
    else {
        return (fibonacci(number - 1) + fibonacci(number - 2))
    }
}

const printFibonacci = (limit) => {
    for ( let n = 0; n < limit; n++) {
    console.log(fibonacci(n));
        
    }
}

function fibonacci2(limit) {
    let a = 0, b = 1, c;
    console.log(b);
    for (let i = 1; i < limit; i++) {
        c = a + b;
        a = b;
        b = c;
        console.log(c); 
    } 
}  

fibonacci2(10)
//printFibonacci(10) 


