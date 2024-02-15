import { ProductServices } from '../../api/ProductosServices.service';
import { CommonModule } from '@angular/common';
import { Component, Inject, inject } from '@angular/core';


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
