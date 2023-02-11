import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import {ProductsModule} from "../products/products.module";



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports :[
    HeaderComponent,

  ]
})
export class SharedModule { }
