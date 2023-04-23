export interface Producto {
    id: number;
    nombre:string;
    precio:number;
    stock:number;
    estado:string;
    opciones:string;
}

export class Producto {
    id: number;
    nombre: string;
    precio: number;
    estado:string;
    opciones:string;

    constructor() {
        this.id = 0;
        this.nombre = "";
        this.precio = 0;
        this.stock = 0;
        this.estado = "";
        this.opciones = "";
    }
}