import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LandingPageComponent} from "./components/landing-page/landing-page.component";
import {LoginComponent} from "./components/login/login.component";
import {CartComponent} from "./components/cart/cart.component";
import {RegisterComponent} from "./components/register/register.component";
import {ProductPageComponent} from "./components/product-page/product-page.component";
import {CheckoutComponent} from "./components/checkout/checkout.component";

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'product/:id',
    component: ProductPageComponent
  },
  {
    path: 'checkout',
    component: CheckoutComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
