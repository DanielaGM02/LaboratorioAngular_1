import { Component, Input } from '@angular/core';
import { Producto } from 'src/app/modelo/producto';
import { ProductoService } from 'src/app/servicios/producto.service';
import { ListadoComponent } from '../listado/listado.component';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

producto: Producto = {
  id: 0,
  nombre: "",
  precio: 0,
  stock: 0,
  estado: "",
  opciones: ""
}

@Input() Listado: ListadoComponent | undefined;
constructor(private productoService:ProductoService){};

agregar(){
  this.productoService.crearProducto(this.producto).subscribe(resp=>{
    this.producto= {
    id:0,
    nombre: "",
    precio: 0,
    stock: 0,
    estado: "",
    opciones: ""
  };
    console.log(resp);
    this.Listado?.ngOnInit();
  })
}

eliminar(){
  this.Listado?.eliminar();
}
}