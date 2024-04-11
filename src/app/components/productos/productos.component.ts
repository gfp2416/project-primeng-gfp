import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ProductosService } from '../../services/productos.service';
import { TableModule } from 'primeng/table';
import { ButtonDirective, ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { TooltipModule } from 'primeng/tooltip';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [TableModule, ButtonModule, CommonModule, IconFieldModule, IconFieldModule,TooltipModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
  productosList: any[] = [];

  ngOnInit() {
    this.loadProductos();
  }
  
  loadProductos() {
    this.service.getProductos().subscribe((res) => {this.productosList = res});
  }

  modifyProducto(id: number) {
    this.router.navigate(['/abmproducto/' + id]);
  }

  deleteProducto(id: number) {
    let confirma = confirm('Esta seguro de que desea eliminar el producto?');
    if(confirma){
      this.service.deleteProductobyId(id).subscribe((res) => {this.loadProductos()});
    }
  }
  
  constructor(private fb: FormBuilder, private service: ProductosService, private router: Router){}
}
