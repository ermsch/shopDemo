import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { SearchComponent } from './components/search/search.component';
import { HeroComponent } from './components/hero/hero.component';
import { ProductComponent } from './components/product/product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CartComponent } from './components/cart/cart.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RowSliderComponent } from './components/row-slider/row-slider.component';
import { HttpClientModule } from '@angular/common/http';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { RegisterComponent } from './components/register/register.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { CartService } from "./services/cart.service";
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { CheckoutComponent } from './components/checkout/checkout.component';

const NzModules = [
  NzFormModule,
  NzInputModule,
  NzButtonModule,
  NzIconModule,
  NzCheckboxModule,
]


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SearchComponent,
    HeroComponent,
    ProductComponent,
    ProductListComponent,
    CartComponent,
    RowSliderComponent,
    RegisterComponent,
    ProductPageComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    CarouselModule,
    HttpClientModule,
    NzModules,
    ReactiveFormsModule,
    NgxSkeletonLoaderModule

  ],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
