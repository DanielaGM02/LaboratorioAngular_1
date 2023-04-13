import { Component } from '@angular/core';
import { Producto } from 'src/app/modelo/producto';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  productos: Producto[] = [];

producto: Producto = {
  nombre: "",
  precio: 0,
  stock: 0,
  estado: ""
}

agregar(){
  this.productos.push(this.producto);

  this.producto = {
    nombre: '',
    precio: 0,
    stock: 0,
    estado: 'Disponible'
    }
}
eliminar(){
  this.productos = []
}

}
