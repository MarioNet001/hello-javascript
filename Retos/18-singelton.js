/*
 * EJERCICIO:
 * Explora el patrón de diseño "singleton" y muestra cómo crearlo
 * con un ejemplo genérico.
 *
 * DIFICULTAD EXTRA (opcional):
 * Utiliza el patrón de diseño "singleton" para representar una clase que
 * haga referencia a la sesión de usuario de una aplicación ficticia.
 * La sesión debe permitir asignar un usuario (id, username, nombre y email),
 * recuperar los datos del usuario y borrar los datos de la sesión.
 */



class ConfigManager {
    static instance = null 
    static getInstance(){
        if (!ConfigManager.instance) {
            ConfigManager.instance = new ConfigManager()
            ConfigManager.instance = {color: 'black',user:'Max'}
        }
        return ConfigManager.instance
    }
    getConfigValue(key){
        return this.instance[key]
    }
}

let config1 = ConfigManager.getInstance()
console.log(config1);

//extra 
class SesionManager  {
    constructor(){ // en el constructor crea una condicional que si no existe la instancia la cree y si existe la retorne   
        if (!SesionManager.instance) {
            // en caso de no existir crea la instancia con la misma clase y la asigna a la propiedad instance
            SesionManager.instance = this
            this.user = null
        }
        return SesionManager.instance
    }
    setUser(user){
        this.user = user
    }
    getUser(){
        return this.user
    }
    deleteUser(){
        this.user = null
    }

}

let sesion = new SesionManager()
console.log(sesion.getUser());
sesion.setUser({id:1,username:'max',email:'ter@hotmail.es'})

console.log(sesion.getUser());

let sesion2 = new SesionManager()
console.log(sesion2.getUser());
sesion2.deleteUser()




