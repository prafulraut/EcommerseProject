import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
// import { EcomdataModule } from './EcomData/ecomdata.module';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    // HomeComponent,
    // EcomdataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // EcomdataModule
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
