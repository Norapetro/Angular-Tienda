import { HttpClient } from '@angular/common/http';
import {Inject, Injectable} from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class ProductosServices{

    private readonly _http = Inject(HttpClient);
    
    getAllProduct() :Observable<any>{
        return this._http.get('https://fakestoreapi.com/products')
    }


}