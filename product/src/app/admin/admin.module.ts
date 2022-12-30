import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
   path:"", component:AdminComponent
  }
]


@NgModule({
  declarations: [AdminComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,FormsModule,ReactiveFormsModule
  ],
  exports:[RouterModule]
})
export class AdminModule { }
