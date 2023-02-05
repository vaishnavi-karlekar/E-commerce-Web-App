import { Component } from '@angular/core';
import { CartService } from 'src/app/api/cart.service';
import { ProductsService } from 'src/app/api/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  constructor(private api:ProductsService, private cart:CartService ){}
  public productList:any;
  addItem = [];

  ngOnInit():void{
    this.api.getProduct(1).subscribe(res=>{
      console.log(res);
      this.productList = res;   
        

        this.productList.forEach((a:any) => {
          Object.assign(a, {quantity:1, total: a.price})
        });
      });
}
    addToCart(item:any){
      this.cart.addToCart(item);
      console.log(item);
    }

  

}
