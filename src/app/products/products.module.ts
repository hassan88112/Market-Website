import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { ProductsDetailsComponent } from './components/products-details/products-details.component';
import {SharedModule} from "../shared/shared.module";



@NgModule({
  declarations: [
    AllProductsComponent,
    ProductsDetailsComponent
  ],
  exports: [
    AllProductsComponent,
    ProductsDetailsComponent,
    SharedModule
  ],
  imports: [
    CommonModule
  ]
})

export class ProductsModule { }
