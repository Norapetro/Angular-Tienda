import { CommonModule } from '@angular/common';
import { ProductosServices } from '../../api/ProductosServices.service';
import { Component, Inject, inject } from '@angular/core';
import { ProductServices } from '../../api/ProductServices.service';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {

  readonly productsSvs = inject(ProductServices);
  products$ = this.productsSvs.getAllProduct();


}
