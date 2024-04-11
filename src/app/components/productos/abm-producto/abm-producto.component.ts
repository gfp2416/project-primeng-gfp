import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, ReactiveFormsModule } from '@angular/forms';
import { ProductosService } from '../../../services/productos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from '../../../models/producto.model';
import { InputTextModule } from 'primeng/inputtext';
import { BrowserModule } from '@angular/platform-browser';
import { CardModule } from 'primeng/card'
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { StyleClassModule } from 'primeng/styleclass';

@Component({
  selector: 'app-abm-producto',
  standalone: true,
  imports: [InputTextModule, CommonModule, ReactiveFormsModule, CardModule, ButtonModule, StyleClassModule],
  templateUrl: './abm-producto.component.html',
  styleUrl: './abm-producto.component.css'
})
export class AbmProductoComponent implements OnInit {
productoForm = this.fb.group({
  id: [0, [Validators.required, Validators.min(1)]],
  descripcion: ['', [Validators.required, Validators.minLength(4)]],
  precio: [0, [Validators.required, Validators.min(1)]]
}
);

createOrUpdateProducto() {
  this.service.getProductobyId(Number(this.productoForm.value.id?.toString())).subscribe((res) => { 
    if(res != null)
      this.service.updateProductobyId(this.productoForm.value).subscribe((res) => {this.router.navigate(['productos'])});
    else
      this.service.createProductobyId(this.productoForm.value).subscribe((res) => {this.router.navigate(['productos'])});
  });
}

constructor(private fb: FormBuilder, private service: ProductosService, private router: Router, private activatedRute: ActivatedRoute) {}

ngOnInit() {
    var idModify = this.activatedRute.snapshot.paramMap.get('id');
    if(idModify != null && idModify.toString() != '0'){
      var idProd = Number(idModify);
      var idPr, desc, prec;
      var product: Producto;
      this.service.getProductobyId(idProd).subscribe(data => {
        product = data;
        this.productoForm.setValue({id: product.id, descripcion: product.descripcion, precio: product.precio});
      })
      
    }
    
  }
}
