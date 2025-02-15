/*
 * EJERCICIO:
 * Empleando tu lenguaje, explora la definición del tipo de dato
 * que sirva para definir enumeraciones (Enum).
 * Crea un Enum que represente los días de la semana del lunes
 * al domingo, en ese orden. Con ese enumerado, crea una operación
 * que muestre el nombre del día de la semana dependiendo del número entero
 * utilizado (del 1 al 7).
 *
 * DIFICULTAD EXTRA (opcional):
 * Crea un pequeño sistema de gestión del estado de pedidos.
 * Implementa una clase que defina un pedido con las siguientes características:
 * - El pedido tiene un identificador y un estado.
 * - El estado es un Enum con estos valores: PENDIENTE, ENVIADO, ENTREGADO y CANCELADO.
 * - Implementa las funciones que sirvan para modificar el estado:
 *   - Pedido enviado
 *   - Pedido cancelado
 *   - Pedido entregado
 *   (Establece una lógica, por ejemplo, no se puede entregar si no se ha enviado, etc...)
 * - Implementa una función para mostrar un texto descriptivo según el estado actual.
 * - Crea diferentes pedidos y muestra cómo se interactúa con ellos. 
 */

enum DiasSemana {
    Lunes = 1,
    Martes = 2,
    Miercoles = 3,
    Jueves = 4,
    Viernes = 5,
    Sabado = 6,
    Domingo = 7
}

function mostrarDia(dia: number): string {
    return DiasSemana[dia];
}

console.log(mostrarDia(1)); // Lunes

// DIFICULTAD EXTRA
enum EstadoPedido {
    PENDIENTE,
    ENVIADO,
    ENTREGADO,
    CANCELADO
}   

class Pedido { 
    id: number;
    estado: EstadoPedido;

    constructor(id: number) {
        this.id = id;
        this.estado = EstadoPedido.PENDIENTE;
    }

    pedidoEnviado() {
        if (this.estado === EstadoPedido.PENDIENTE) {
            this.estado = EstadoPedido.ENVIADO;
        }
    }

    pedidoEntregado() {
        if (this.estado === EstadoPedido.ENVIADO) {
            this.estado = EstadoPedido.ENTREGADO;
        }
    }

    pedidoCancelado() {
        if (this.estado === EstadoPedido.PENDIENTE) {
            this.estado = EstadoPedido.CANCELADO;
        }
    }

    mostrarEstado(): string {
        switch(this.estado) {
            case EstadoPedido.PENDIENTE:
                return 'El pedido está pendiente';
            case EstadoPedido.ENVIADO:
                return 'El pedido ha sido enviado';
            case EstadoPedido.ENTREGADO:
                return 'El pedido ha sido entregado';
            case EstadoPedido.CANCELADO:
                return 'El pedido ha sido cancelado';
            default:
                return 'Estado no válido';
        }
    }
}