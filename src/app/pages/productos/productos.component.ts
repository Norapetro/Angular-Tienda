import { ProductServices } from '../../api/ProductosServices.service';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Producto } from '../../model/Producto.model';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {

  readonly productsSvs = inject(ProductServices);
  products: Observable<Producto[]> = this.productsSvs.getAllProduct();


}
