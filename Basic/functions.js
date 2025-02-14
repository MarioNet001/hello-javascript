
// la diferencia entre una funcion  normal y una arrow function es que aparte de la sintaxis 
// al querere usar un objeto no hay una vinculacion con el sujeto this  ejemplo 



const batman = {
    name : "Bruno" ,
    lastname: "Diaz",
    messangeWhitFunction : function(messenge){
        console.log(this.name +" dice :  " + messenge);
    },

    messangeWhitArrow:  (messenge) => console.log(this.name +"  dice :  " + messenge)

}

batman.messangeWhitFunction("como esta el mundo");
batman.messangeWhitArrow("batfantastico");