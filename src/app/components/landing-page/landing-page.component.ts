import {Component} from '@angular/core';
import {Category} from "../../models/Category";
import {Product} from "../../models/Product";
import {products} from "../../products";
import {OwlOptions} from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {




  productList: Product[] = products

  showThisCategory: Category = Category.BEAUTY;




  protected readonly Category = Category;
}
