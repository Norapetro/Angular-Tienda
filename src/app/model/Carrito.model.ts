export interface Carrito{
  CostoTotal:string;
  productoCarrito:ProductoCarrito;

}

export interface ProductoCarrito{
  id:number;
  nombreProducto:string;
  Costo:number;
  cantidad:number;



}
