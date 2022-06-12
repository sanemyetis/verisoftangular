import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './addproduct/addproduct.component';
import { AppComponent } from './app.component';
import { EditproductComponent } from './editproduct/editproduct.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path:"productdetail/:id",component: ProductdetailComponent},
  {path:"addproduct",component:AddproductComponent},
  {path:"editproduct/:id",component:EditproductComponent},
  {path:'home',component:HomeComponent},
  { path: '**', component: HomeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
