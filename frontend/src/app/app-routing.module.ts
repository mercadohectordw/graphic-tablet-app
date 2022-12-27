import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { ProductComponent } from './components/pages/product/product.component';
import { AuthLoginComponent } from './components/pages/auth-login/auth-login.component';
import { AuthRegisterComponent } from './components/pages/auth-register/auth-register.component';


const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "product/:id", component: ProductComponent},
  {path: "login", component: AuthLoginComponent},
  {path: "register", component: AuthRegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
