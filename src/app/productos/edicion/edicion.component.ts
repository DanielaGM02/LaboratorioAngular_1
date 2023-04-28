import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from 'src/app/modelo/producto';
import { ProductoService } from 'src/app/servicios/producto.service';
import { ListadoComponent } from '../listado/listado.component';

@Component({
  selector: 'app-edicion',
  templateUrl: './edicion.component.html',
  styleUrls: ['./edicion.component.css']
})


export class EdicionComponent implements OnInit {
 public producto: Producto = new Producto();
 
  @Input() listado: ListadoComponent | undefined;
  constructor(private servicioProducto:ProductoService, private route: ActivatedRoute){}

  ngOnInit(): void {
  }



  Editar() {
    this.servicioProducto.editarProductor(this.producto).subscribe(resultado => {
      this.producto = new Producto;
      console.log(resultado);
      this.listado?.ngOnInit();
    })
  }

  modificarProducto(producto: Producto){
      this.servicioProducto.getProductos(producto).subscribe(result =>{
         this.producto =  result[0];
         console.log(result);
     });
   }

}
