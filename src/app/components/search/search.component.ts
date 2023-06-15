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

    this.searchedProduct = ''
  }

}
