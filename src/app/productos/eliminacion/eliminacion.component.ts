import { Component, Input } from '@angular/core';
import { Producto } from '../../modelo/producto';
import { ListadoComponent } from '../listado/listado.component';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-eliminacion',
  templateUrl: './eliminacion.component.html',
  styleUrls: ['./eliminacion.component.css']
})
export class EliminacionComponent {
  constructor(private servicioProducto:ProductoService){}

  eliminar(producto: Producto){
    if(confirm("¿Está seguro de eliminar este producto?")){
      this.servicioProducto.eliminarProducto(producto).subscribe(resultado =>{
        this.listado?.ngOnInit();
      });
    }
  }
  @Input() listado: ListadoComponent | undefined;
}
