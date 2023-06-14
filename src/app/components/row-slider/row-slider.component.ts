import {Component, Input} from '@angular/core';
import {OwlOptions} from "ngx-owl-carousel-o";
import {Product} from "../../models/Product";
import {products} from "../../products";
import {Category} from "../../models/Category";

@Component({
  selector: 'app-row-slider',
  templateUrl: './row-slider.component.html',
  styleUrls: ['./row-slider.component.scss']
})
export class RowSliderComponent {

  @Input() hello!: string
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: false
  }


  productList: Product[] = products

  @Input() showThisCategory!: Category

  get categorizedProducts(): Product[] {
    return this.productList.filter(product => product.category === this.showThisCategory);
  }


  protected readonly Category = Category;

}
