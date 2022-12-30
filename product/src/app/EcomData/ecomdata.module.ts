import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EcomdataComponent } from './ecomdata.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
   path:"", component:EcomdataComponent
  }
]

@NgModule({
  declarations: [EcomdataComponent],
  imports: [RouterModule.forChild(routes),
    CommonModule,FormsModule,ReactiveFormsModule
  ],
  exports:[RouterModule]
})
export class EcomdataModule { }
