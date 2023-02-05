import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/api/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public products!:any[];
  public grossTotal:number = 0;
  constructor(private cart:CartService){}

  ngOnInit(): void {
    
    this.cart.getProduct().subscribe(res=>{
      this.products = res;
      this.grossTotal = this.cart.getTotalPrice();
    })
  }

  deleteItem(item:any){
    this.cart.removeCartItem(item)
  }

}
