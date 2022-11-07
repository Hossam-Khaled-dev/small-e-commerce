import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Componnets/home/home.component';
import { LoginComponent } from './Componnets/login/login.component';
import { MainLayoutComponent } from './Componnets/main-layout/main-layout.component';
import { OrderMasterComponent } from './Componnets/order-master/order-master.component';
import { ProductDetailsComponent } from './Componnets/product-details/product-details.component';
import { ProductListComponent } from './Componnets/product-list/product-list.component';

const routes: Routes = [
  {path: '' , component: MainLayoutComponent, children:[
    {path:'' , redirectTo: '/home' , pathMatch: 'full'},
    {path:'home' , component:HomeComponent},
    {path:'products', component:ProductListComponent},
    {path:'products/:id', component:ProductDetailsComponent},
    {path:'orders', component:OrderMasterComponent}
  ]},
  {path:'login', component:LoginComponent}
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
