import { Carrito, ProductoCarrito } from './../../model/Carrito.model';
import { Component } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';



@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [MatTableModule,MatIcon,MatCard],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})



export class CarritoComponent {
  carritoDeCompras: Carrito = {
    CostoTotal: 100,
    productoCarrito: [
      { id: 1, nombreProducto: 'Producto 1', Costo: 50, cantidad: 2 },
      { id: 2, nombreProducto: 'Producto 2', Costo: 30, cantidad: 1 }
    ]
  };

  // agregarAlCarrito(producto: ProductoCarrito) {
  //   // Agregar el producto al carrito
  //   this.carritoDeCompras.productoCarrito.push(producto);
  //   // Actualizar el costo total del carrito
  //   this.carritoDeCompras.CostoTotal += (producto.Costo * producto.cantidad);
  //   console.log(`Producto agregado al carrito: ${producto.nombreProducto}`);
  //   console.log('Carrito actual:', this.carritoDeCompras);
  // }

  eliminarProducto(id: number) {
    // Encuentra el índice del producto con el ID proporcionado
    const index = this.carritoDeCompras.productoCarrito.findIndex(producto => producto.id === id);
    // Si se encuentra el producto
    if (index !== -1) {
      // Elimina el producto del array
      this.carritoDeCompras.productoCarrito.splice(index, 1);
      console.log(`Producto eliminado con ID: ${id}`);
    } else {
      console.log(`No se encontró ningún producto con ID: ${id}`);
    }
  }
}
