import { Component } from '@angular/core';
import * as jsondata from "../../assets/jsonData/ecommerceProduct.json"
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  products = (jsondata as any).default;
  formValue: any;
  constructor() {
    console.log(this.products);
    
   }
   deleteProduct(i:any){
    this.products.splice(i,1)
   }

  ngOnInit(): void {
  }
  onSubmit(data: any) {
    this.formValue=data.form.value
    console.log(this.formValue);
    // this.contactService.postContact(this.formValue).subscribe((res)=> {
    //   console.log(res);
    }
}
