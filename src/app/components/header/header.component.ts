import {Component, OnInit} from '@angular/core';
import {Product} from "../../models/Product";
import {CartService} from "../../services/cart.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  cartCountSubscription!: Subscription
  cartItemsCounter: number = 0
  // cart!: Product[]

  constructor(private cartService: CartService) {
  }
  ngOnInit() {
    this.cartCountSubscription = this.cartService.currentCartCount.subscribe(count => {
      this.cartItemsCounter = count
    })

  }

}
