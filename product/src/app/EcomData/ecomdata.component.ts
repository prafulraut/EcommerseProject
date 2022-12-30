import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import * as jsondata from "./../../assets/jsonData/ecommerceProduct.json"
@Component({
  selector: 'app-ecomdata',
  templateUrl: './ecomdata.component.html',
  styleUrls: ['./ecomdata.component.css']
})
export class EcomdataComponent implements OnInit {
  products = (jsondata as any).default;
  name = 'Angular';
  myForm!: FormGroup;
  filteredProducts!: { id:number; category: any; title: string; price: number; description: string; rating:any; image: any[]; }[];

  PriceFilter = [
    {
      "TagId": 20,
      "Type": "Budget",
      "Value": 15,
      "Values": null,
      "DisplayText": "$15",
      "Order": null
    },
    {
      "TagId": 20,
      "Type": "Budget",
      "Value": 25,
      "Values": null,
      "DisplayText": "$25",
      "Order": null
    },
    {
      "TagId": 20,
      "Type": "Budget",
      "Value": 50,
      "Values": null,
      "DisplayText": "$50",
      "Order": null
    }]
  
  
  constructor(private fb: FormBuilder) {
    console.log(this.products);
    // this.filteredUsers = [...this.products]
    this.myForm = this.fb.group({
      filterProduct: ['']
    })
    

  }

  getValue(index: any) {
    if (index === 0)
      return {
        lower: 0,
        displayText: this.PriceFilter[index].DisplayText,
        upper: this.PriceFilter[index].Value
      };
    else {
      return {
        lower: this.PriceFilter[index - 1].Value,
        upper: this.PriceFilter[index].Value,
        displayText: `${this.PriceFilter[index - 1].DisplayText} - ${this.PriceFilter[index].DisplayText}`
      };
    }
  }

  ngOnInit() {
    this.filteredProducts = [...this.products]

    this.myForm.get('filterProduct')?.valueChanges.subscribe(
      value => {
        console.log(value);
        this.filteredProducts = [...this.products.filter((product: { price: number; }) => product.price >= value.lower && product.price <= value.upper)]
      }
    )
  }

  

}
