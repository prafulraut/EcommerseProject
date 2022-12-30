import { Component, ViewChild } from '@angular/core';
import * as jsondata from "../../assets/jsonData/ecommerceProduct.json"
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  products = (jsondata as any).default;
  productsId = [...this.products]
  formValue: any;
  productAdd: any[] = [];
  @ViewChild('closebutton') closebutton: any;

  constructor() {
    console.log(this.products);

  }
  deleteProduct(i: any) {
    this.products.splice(i, 1)
    this.productAdd.splice(i, 1)
  }

  ngOnInit(): void {
    console.log(this.products);

  }
  onSubmit(data: any) {
    this.formValue = data.form.value
    console.log(this.formValue);
    this.productAdd.push(this.formValue)
    this.closebutton.nativeElement.click();
  }
  url = '';
  onSelectFile(event: any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]);

      reader.onload = (event: any) => {
        console.log(event);
        this.url = event.target.result;
      }
    }
  }

}
