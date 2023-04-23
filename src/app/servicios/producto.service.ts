// import { Injectable } from '@angular/core';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Producto } from '../modelo/producto';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  // constructor() { }
  public productos:Array<Producto>=[];

  // private url = 'http://localhost:4200//tiendaservices/ProductoService.php';
  
  constructor(private http: HttpClient) { }
  
  public agregar(p:Producto){
  this.productos.push(p);
  }
  
  // public getProductos(){
  //  //defino la url donde esta el servicio
  //  let  url ='http://localhost/tiendaservice/ProductoService.php';
  //     let header=new HttpHeaders();
  //     header.append('Content-Type','aplication/json')
  //     header.append('Access-Control-Allow-Origin','http://localhost');

  //     return this.http.get<Producto[]>(url,{headers:header});
  // }

  public getProductos(p: Producto | null = null){
    var header = new HttpHeaders();
    let  url ='http://localhost/tiendaservice/ProductoService.php';
    header.append('Content-Type','aplication/json')
    header.append('Access-Control-Allow-Origin','http://localhost');
    
    var params = new HttpParams();
    if(p != null)
     params = params.append('param', p.id.toString())

    return this.http.get<Producto[]>(url, { headers: header, params: params });
   }

  public crearProducto(producto:Producto){

  //defino la url donde esta el servicio
  let  url ='http://localhost/tiendaservice/ProductoService.php';
     let header=new HttpHeaders();
     header.append('Content-Type','aplication/json')
     header.append('Access-Control-Allow-Methods','"POST, GET,DELETE,PUT"')
     header.append('Access-Control-Allow-Origin','http://localhost');
     return this.http.post(url,JSON.stringify(producto),{headers:header});
  }

}
