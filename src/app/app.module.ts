import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
/*Modulos*/

import {IvyCarouselModule} from 'angular-responsive-carousel';

/*componentes*/
import  { HomeComponent }  from './landPage/home/home.component';
import { ArtculosComponent } from './Articulos/artculos/artculos.component';
import { BongsGlassComponent } from './Articulos/bongs-glass/bongs-glass.component';
import { PageNotFoundComponent } from './landPage/page-not-found/page-not-found.component';
import { WaxComponent } from './Articulos/wax/wax.component';
import { BluntComponent } from './Articulos/blunt/blunt.component';
import { GasMaskComponent } from './Articulos/gas-mask/gas-mask.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArtculosComponent,
    BongsGlassComponent,
    PageNotFoundComponent,
    WaxComponent,
    BluntComponent,
    GasMaskComponent
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
