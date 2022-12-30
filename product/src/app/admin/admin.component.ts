import { Component } from '@angular/core';
import * as jsondata from "../../assets/jsonData/ecommerceProduct.json"
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  products = (jsondata as any).default;
  constructor() {
    console.log(this.products);
    
   }

  ngOnInit(): void {
  }

}
