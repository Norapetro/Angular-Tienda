import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { ProductosDetalleComponent } from './pages/productos-detalle/productos-detalle.component';
import { RegistroComponent } from './pages/registro/registro.component';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'carrito',
        component: CarritoComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'productos',
        component: ProductosComponent
    },
    {
        path: 'productos-detalle',
        component: ProductosDetalleComponent
    },
    {
        path: 'registro',
        component: RegistroComponent
    },
    {
        path: '**',
        component: HomeComponent
    }
];
