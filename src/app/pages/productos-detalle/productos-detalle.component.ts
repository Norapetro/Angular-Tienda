import { Component, OnInit, inject } from '@angular/core';
import { ProductServices } from './../../api/ProductosServices.service';
import { IProduct } from './../../model/Producto.model';
import { ActivatedRoute, } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-productos-detalle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productos-detalle.component.html',
  styleUrls: ['./productos-detalle.component.css']
})
export class ProductosDetalleComponent implements OnInit {

  loading: boolean = true;
  public product?: IProduct;

  private _route = inject(ActivatedRoute);
  private _apiService = inject(ProductServices);

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      this._apiService.getProduct(params['id']).subscribe((data: IProduct) => {
        this.product = data
        this.loading = false;
      });
    }
    )
  }

}
