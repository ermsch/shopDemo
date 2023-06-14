import {Component} from '@angular/core';
import {Product} from "../../models/Product";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  searchedProduct = ''

  searchProduct(){
    console.log('searched product is: ', this.searchedProduct)
    this.searchedProduct = ''
  }

}
