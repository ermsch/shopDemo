import {Component, OnInit} from '@angular/core';
import {Product} from "../../models/Product";
import {products} from "../../products";
import {CartService} from "../../services/cart.service";
// import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
// import image1 from '../../../assets/images/product_hero.png'

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {

  productList: Product[] = products



}
