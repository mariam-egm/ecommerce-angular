import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { InputComponent } from './components/shared/input/input.component';
import { SubmitComponent } from './components/shared/submit/submit.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ProductsService } from './services/products.service';
import { ProductComponent } from './components/product/product.component';
import { ButtonComponent } from './components/shared/button/button.component';
import { SinglePageComponent } from './components/single-page/single-page.component';
import { CartComponent } from './components/cart/cart.component';
import { WishListComponent } from './components/wish-list/wish-list.component';
import { OptionComponent } from './componendt/shared/option/option.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    InputComponent,
    SubmitComponent,
    LoginComponent,
    HeaderComponent,
    HomeComponent,
    ProductComponent,
    ButtonComponent,
    SinglePageComponent,
    CartComponent,
    WishListComponent,
    OptionComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
