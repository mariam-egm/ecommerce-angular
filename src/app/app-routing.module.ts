import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { SinglePageComponent } from './components/single-page/single-page.component';
import { CartComponent } from './components/cart/cart.component';
import { WishListComponent } from './components/wish-list/wish-list.component';


const routes: Routes = [
  { path : '', component: HomeComponent},
  { path : 'register', component: RegisterComponent},
  { path : 'login', component: LoginComponent},
  { path : 'cart', component: CartComponent},
  { path : 'wishlist', component: WishListComponent},
  { path : ':productIndex', component: SinglePageComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
