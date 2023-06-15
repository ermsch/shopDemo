import {Component, OnInit} from '@angular/core';
import {Product} from "../../models/Product";
import {CartService} from "../../services/cart.service";
import {Category} from "../../models/Category";
import {Availability} from "../../models/Availability";
import {sum} from "ng-zorro-antd/core/util";
import {count} from "rxjs";
import {Cart} from "../../models/Cart";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartItems!: Product[]
  counts: any = [];
  endPrice: number = 0
  countArray: any[] = [];
  newCart!: Cart


  constructor(
    private cartService: CartService,
    private userService: UserService
  ) { }

  calculateProductCounts(){
    this.cartItems.forEach( (x) =>  {
      this.counts[x.id] = (this.counts[x.id] || 0) + 1; });
  }

  isDuplicate(product: any, currentIndex: number): boolean {
    for (let i = 0; i < currentIndex; i++) {
      if (product.id === this.cartItems[i].id) {
        return true; // Found a duplicate
      }
    }
    return false; // No duplicates found
  }

  calculateEndPrice(){
    this.cartItems.forEach(item => {
      this.endPrice += item.price
    })
  }

  deleteItem(id: number){
    this.counts[id] -= 1
    this.endPrice = 0;
    const index = this.cartItems.findIndex(item => item.id === id);
    this.cartItems.splice(index, 1);


    // this.calculateProductCounts()
    this.calculateEndPrice()
  }

  collectCart(){
    const checkoutId = this.cartService.checkoutCart.length + 1
    this.newCart = {
      id: checkoutId,
      user: this.userService.loggedUser,
      items: this.cartItems.map(item => item)
    }
    this.cartService.checkoutCart.push(this.newCart)
    console.log(this.newCart)
    this.cartService.cartId = this.newCart.id
  }




  ngOnInit() {
    let edit = 0
    this.cartItems = this.cartService.cartItems
    this.calculateProductCounts()
    this.calculateEndPrice()
  }

  createCheckout(){

  }


}
