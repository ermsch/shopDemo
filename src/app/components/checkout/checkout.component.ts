import {Component, OnInit} from '@angular/core';
import {CartService} from "../../services/cart.service";
import {Cart} from "../../models/Cart";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit{

  isLogged!: boolean


  checkoutCart!: Cart
  constructor(private cartService: CartService) {
  }

  findCartById(cartId: number, cart: Cart){
    return
  }

  ngOnInit() {
    const cartId = this.cartService.cartId
    const index = this.cartService.checkoutCart.findIndex(cart => cart.id === cartId);
    this.checkoutCart = this.cartService.checkoutCart[index]
    const isLoggedTemp = localStorage.getItem('isLogged')
    if(isLoggedTemp === 'true'){
      this.isLogged = true
    }
  }

}
