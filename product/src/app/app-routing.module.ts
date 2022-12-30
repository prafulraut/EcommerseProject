import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EcomdataComponent } from './EcomData/ecomdata.component';
import { HomePageComponent } from './home-page/home-page.component';


const routes: Routes = [
  { path: "", redirectTo: "", pathMatch: "full" },
  { path:"", component: HomePageComponent},
  
  {
      path: 'user',
      loadChildren: () =>
        import('./EcomData/ecomdata.module').then((m) =>
          m.EcomdataModule),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) =>
        m.AdminModule),
},
  // {
  //   path: 'allCourses',
  //   loadChildren: () =>
  //     import('./AllCourses/course.module').then((m) =>
  //       m.CourseModule),
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
  // {
  //   path: 'user',
  //   loadChildren: () =>
  //     import('./EcomData/ecomdata.module').then((m) =>
  //       m.EcomdataModule),
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
