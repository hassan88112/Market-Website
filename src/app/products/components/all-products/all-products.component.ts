import {Component, OnInit} from '@angular/core';
import {ProductsService} from "../../services/products.service";

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent  implements  OnInit{

  products :any []=[];

  constructor(private service :ProductsService) {

  }

  ngOnInit(): void {

    this.getProducts();
  }

  getProducts(){
    this.service.getAllProducts().subscribe((res:any) =>{   //  subscribe >> observable .. to link front to back
      this.products=res;
    });
  }
}
