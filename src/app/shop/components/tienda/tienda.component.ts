import { Component, NgModule } from '@angular/core';
import { Product, products } from '../../models/producto';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-tienda',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './tienda.component.html',
  styleUrl: './tienda.component.css'
})
export class TiendaComponent {
  productos = [...products];

  share (producto: Product) {
    window.alert(producto.nombre + ' fue agregado al carrito');
  }

}
