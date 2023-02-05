import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public productList = new BehaviorSubject<any>([]);
  public cartItemList:any=[];

  constructor() { }

  getProduct(){
    return this.productList.asObservable();
  }

  addToCart(product:any){
    this.cartItemList.push(product)
    this.productList.next(this.cartItemList)
    this.getTotalPrice();
  }

  getTotalPrice():number{
    let grossTotal = 0;
    this.cartItemList.map((a:any)=>{
      grossTotal +=a.total;
      console.log(grossTotal);
        })
    return grossTotal;
    
  }

  removeCartItem(product:any){
    this.cartItemList.map((a:any, index:any)=>{
      if(product.id === a.id)
        this.cartItemList.splice(index,1)
      })    
      this.productList.next(this.cartItemList)
      }
    
  }

