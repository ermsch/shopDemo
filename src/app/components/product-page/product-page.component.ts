import {Component, OnInit} from '@angular/core';
import {Product} from "../../models/Product";
import {products} from "../../products";
import {ActivatedRoute} from "@angular/router";
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {



  product: Product[] = products

  id!: any
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  addToCart(id: number){
    this.cartService.cartItems.push(this.product[id - 1])
    this.cartService.changeCartCount(this.cartService.cartItems.length)
  }

  ngOnInit(){
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id')
      this.id -= 1
    })

  }

}
