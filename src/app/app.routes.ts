import { Routes } from '@angular/router';
import { ProductosComponent } from './components/productos/productos.component';
import { AbmProductoComponent } from './components/productos/abm-producto/abm-producto.component';

export const routes: Routes = [
{
    path: 'productos',
    component: ProductosComponent
},{
    path: 'abmproducto/:id',
    component: AbmProductoComponent
},
{
    path: '', redirectTo: '.', pathMatch: 'full'
}
];
