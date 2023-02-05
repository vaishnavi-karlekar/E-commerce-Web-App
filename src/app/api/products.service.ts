import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }

  getProduct(page:number){
    let limit:number=10;
    let url =  "https://fakestoreapi.com/products?page=${page}&limit=${limit}"
    return this.http.get(url);
     
    
    
   
  }
}
