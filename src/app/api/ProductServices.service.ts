import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({providedIn: 'root'})
export class ProductServices{


    private readonly _hhtp = inject(HttpClient);

    getAllProduct():Observable<any>{
      return this._hhtp.get('https://fakestoreapi.com/products')
    }

  }
