import {Availability} from "./Availability";
import {Category} from "./Category";

export interface Product {
  id: number,
  name: string,
  description: string,
  price: number,
  category: Category,
  rating: number,
  availability: Availability
  image: string
}


