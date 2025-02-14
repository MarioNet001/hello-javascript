


// programa para validar el inicio de sesion de una red social XF 

let usuario = 'Mario' //prompt('porfavor introduce tu nombre de usuario: ');
let pass = "123456"     //prompt('por favor introduce tu contrasena: ');

const baseDeDatos = [
    { nombreUsuario: "Mario", contrasena: "123456" },
    { nombreUsuario: "Ana", contrasena: "abcdef" },
    { nombreUsuario: "Luis", contrasena: "password123" }
];
const usersTimeline = [
    {
        username: "Pablo",
        timeline: "Este es el timeline de Pablo"
    },
    {
        username: "Juan",
        timeline: "Este es el timeline de Juan"
    },
    {
        username: "Pedro",
        timeline: "Este es el timeline de Pedro"
    },
    {
        username: "Diego",
        timeline: "Este es el timeline de Diego"
    }
]
function ValidateUser (nameUser, passUser) {
    const user = baseDeDatos.find(usuario => usuario.nombreUsuario ===nameUser)
    if(user){
        //console.log(`usuario ${nameUser} encontrado`);
        if (user.contrasena === passUser) {
            return true
        } else {
          //  console.log(`la contrasena es incorrecta intenta de nuez`);
            return false
        }
    } else {
        return false
    }
} 


function showTimeLine (timeLine){
    timeLine.forEach(item => {
        console.log(`tu amigo : ${item.username} acaba de publicar : ${item.timeline}`);
    });
}

const Mensaje = (bann) =>{
    if (bann){
        console.log(`bienvenido a XZ ${usuario} :)`); 
        showTimeLine(usersTimeline);
    } else {
        console.log("nombre o contrasenas incorrectas ");
    }
} 

Mensaje(ValidateUser(usuario,pass)); 




