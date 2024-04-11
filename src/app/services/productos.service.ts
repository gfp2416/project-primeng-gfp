import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private url = 'http://localhost:3000/productos/'

  getProductos(){
    return this.http.get<any[]>(this.url)
  }
  
  getProductobyId(id: number): Observable<Producto> {
    return this.http.get<Producto>(this.url + id);
  }

  deleteProductobyId(id: number) {
    return this.http.delete(this.url + id);
  }

  createProductobyId(producto: any) {
    return this.http.post(this.url, producto);
  }

  updateProductobyId(producto: any) {
    return this.http.put(this.url + producto.id, producto);
  }
  
    constructor(private http: HttpClient) { }
}
