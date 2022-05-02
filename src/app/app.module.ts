import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
/*Modulos*/

import {IvyCarouselModule} from 'angular-responsive-carousel';

/*componentes*/
import  { HomeComponent }  from './landPage/home/home.component';
import { ArtculosComponent } from './Articulos/artculos/artculos.component';
import { NavbarComponent } from './landPage/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArtculosComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IvyCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
