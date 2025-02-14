/*
 * EJERCICIO:
 * Explora el concepto de "logging" en tu lenguaje. Configúralo y muestra
 * un ejemplo con cada nivel de "severidad" disponible.
 *
 * DIFICULTAD EXTRA (opcional):
 * Crea un programa ficticio de gestión de tareas que permita añadir, eliminar
 * y listar dichas tareas.
 * - Añadir: recibe nombre y descripción.
 * - Eliminar: por nombre de la tarea.
 * Implementa diferentes mensajes de log que muestren información según la
 * tarea ejecutada (a tu elección).
 * Utiliza el log para visualizar el tiempo de ejecución de cada tarea.
 */

//Ejercicio
//explora el concepto de logging en tu lenguaje
const simpleLogger = require('simple-node-logger').createSimpleLogger('project.log')
const fs = require('fs')        
const chalk = require('chalk')

class ManagetTask {
    constructor(){
        if (!ManagetTask.instance) {
            ManagetTask.instance = this
            this.tasks = []
        }
        return ManagetTask.instance
    }
    addTask(name,description){
        try {
            this.tasks.push({name,description})
            simpleLogger.info(chalk.green('Tarea añadida'))
        } catch (error) {
            simpleLogger.error(chalk.red('Error al añadir la tarea'))
        }

    }
    deleteTask(name){

        this.tasks = this.tasks.filter(task => task.name !== name)
        simpleLogger.warn(chalk.red('Tarea eliminada'))
    }
    listTask(){
        simpleLogger.info(chalk.blue('Tareas Pendientes:'))
        this.tasks.forEach(task => {
            simpleLogger.info(chalk.blue(`  Tarea: ${task.name}, Descripcion: ${task.description}`));
        })
    }
    guardarTareas(){
        fs.writeFileSync('tareas.json',JSON.stringify(this.tasks))
        simpleLogger.info(chalk.green('Tareas guardadas'))
    }

    deleteTaskStorage(){
        fs.unlinkSync('tareas.json')
        simpleLogger.warn(chalk.red('Tareas eliminadas'))
        this.tasks = []
    }
}

let task = new ManagetTask()
task.addTask('tarea1','lavar la ropa ')
task.addTask('tarea2','hacer la comida')
task.addTask('tarea3','estudiar')
task.addTask('tarea4','hacer ejercicio')
task.listTask() 
task.deleteTask('tarea2')
task.listTask()
task.guardarTareas()
task.deleteTask('tarea1')
let task2 = new ManagetTask()
task2.listTask()