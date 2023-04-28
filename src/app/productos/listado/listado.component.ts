import { Component, Input, OnInit } from '@angular/core';
import { Producto } from 'src/app/modelo/producto';
import { RegistroComponent } from '../registro/registro.component';
import { ProductoService } from 'src/app/servicios/producto.service';
import { EdicionComponent } from '../edicion/edicion.component';
import { EliminacionComponent } from '../eliminacion/eliminacion.component';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  public productos: Producto[] = [];
  
  @Input() editar: EdicionComponent | undefined;
  @Input() eliminacion: EliminacionComponent | undefined;

  constructor (public servicioProducto:ProductoService){};
  // constructor(private servicioProducto:ProductoService, private router: Router){}
  ngOnInit(): void {
    // this.productos= RegistroComponent._productos;
    this.servicioProducto.getProductos().subscribe(
      resp=>{
        console.log(resp);
        // RegistroComponent._productos=resp;
        this.productos= resp;
      }
    );
  
  }

  eliminar(){
    this.productos=[];
  }

  eliminar_producto(producto: Producto){
    this.eliminacion?.eliminar(producto);
  }
}
