import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EcomdataComponent } from './EcomData/ecomdata.component';


const routes: Routes = [
  { path: "" , redirectTo:"user",pathMatch:"full"},
  // {
  //   path:"home", component:HomeComponent
  // },
  // {
  //   path:'user',component:EcomdataComponent
  // },
  // {
  //   path: 'home',
  //   loadChildren: () =>
  //     import('./home/home.module').then((m) =>
  //       m.HomeModule),
  // },
  {
    path: 'user',
    loadChildren: () =>
      import('./EcomData/ecomdata.module').then((m) =>
        m.EcomdataModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
