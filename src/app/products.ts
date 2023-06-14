import {Product} from "./models/Product";
import {Category} from "./models/Category";
import {Availability} from "./models/Availability";

export const products: Product[] = [
  {
    id: 1,
    name: 'Product1',
    description: 'a very a nice product description',
    price: 23.99,
    category: Category.DECOR,
    rating: 3,
    availability: Availability.AVAILABLE,
    image: '../../../assets/images/product_hero_2.png'  },
  {
    id: 2,
    name: 'Product2',
    description: 'a very a nice product description',
    price: 12.59,
    category: Category.GARDEN,
    rating: 3,
    availability: Availability.AVAILABLE,
    image: '../../../assets/images/product_hero.png'
  },
  {
    id: 3,
    name: 'Product3',
    description: 'a very a nice product description',
    price: 99.99,
    category: Category.ELECTRONICS,
    rating: 3,
    availability: Availability.AVAILABLE,
    image: '../../../assets/images/product_hero_3.png'
  },
  {
    id: 4,
    name: 'Product4',
    description: 'a very a nice product description',
    price: 99.99,
    category: Category.BEAUTY,
    rating: 3,
    availability: Availability.AVAILABLE,
    image: '../../../assets/images/product_hero_4.png'
  },
  {
    id: 5,
    name: 'Product3',
    description: 'a very a nice product description',
    price: 99.99,
    category: Category.ELECTRONICS,
    rating: 3,
    availability: Availability.AVAILABLE,
    image: '../../../assets/images/product_hero_5.png'
  },
  {
    id: 6,
    name: 'Product3',
    description: 'a very a nice product description',
    price: 2099.99,
    category: Category.ELECTRONICS,
    rating: 3,
    availability: Availability.AVAILABLE,
    image: '../../../assets/images/product_hero_6.png'
  },
  {
    id: 7,
    name: 'Product3',
    description: 'a very a nice product description',
    price: 299.99,
    category: Category.ELECTRONICS,
    rating: 3,
    availability: Availability.AVAILABLE,
    image: '../../../assets/images/product_hero_7.png'
  },
]
