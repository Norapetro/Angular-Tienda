import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ProductServices } from '../../api/ProductosServices.service'; // Asegúrate de importar ProductServices
import { Producto } from '../../model/Producto.model';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent implements OnInit {

  productList: Producto[] = [];
  private _Http = inject(ProductServices);
  private _router = inject(Router);
  readonly productsSvs = inject(ProductServices); // Agrega esta línea

  ngOnInit(): void {
    this._Http.getAllProduct().subscribe((data: Producto[]) => {
      console.log(data);
      this.productList = data;
    });
  }

  navegate(id: number): void {
    this._router.navigate(['/products', id]);
  }

  // Agrega cualquier otro método o lógica que necesites aquí
  // ...

  // También puedes usar this.productsSvs para obtener los productos
  // Ejemplo:
  // this.productsSvs.getAllProduct().subscribe((productos: Producto[]) => {
  //   this.products = productos;
  // });
}
