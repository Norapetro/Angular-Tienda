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

  eliminarProducto(id: number) {
    // Aquí deberías implementar la lógica para eliminar el producto con el ID proporcionado
    // Puedes emitir un evento, llamar a un servicio, etc.
    console.log(`Eliminar producto con ID: ${id}`);
  }
}
