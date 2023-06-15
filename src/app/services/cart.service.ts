import {Injectable, OnInit} from '@angular/core';
import {Product} from "../models/Product";
import {BehaviorSubject} from "rxjs";
import {Cart} from "../models/Cart";
import {Category} from "../models/Category";
import {Availability} from "../models/Availability";

@Injectable({
  providedIn: 'root'
})
export class CartService implements OnInit {

  cartItems: Product[] = []

  checkoutCart: Cart[] = [{
    id: 1,
    user: {
      id: 2,
      email: 'test@hot.de',
      firstName: 'test',
      lastName: 'user',
      userName: 'hero2',
      password: '1234'
    },
    items: [
      {
        id: 1,
        name: 'Product1',
        description: 'a very a nice product description',
        price: 23.99,
        category: Category.DECOR,
        rating: 3,
        availability: Availability.AVAILABLE,
        image: '../../../assets/images/product_hero_2.png'
      },
    ]

  }]

  cartId!: number

  private cartCount = new BehaviorSubject<number>(0)

  currentCartCount = this.cartCount.asObservable()

  constructor() { }

  changeCartCount(count: number){
    this.cartCount.next(count)
  }

  ngOnInit() {
  }

}
