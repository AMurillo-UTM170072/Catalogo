import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BongsGlassComponent } from './Articulos/bongs-glass/bongs-glass.component';
import { HomeComponent } from './landPage/home/home.component';
import { PageNotFoundComponent } from './landPage/page-not-found/page-not-found.component';


//modulos de articulos 
const routes: Routes = [
  {path: 'Home', component: HomeComponent },
  {path: 'bongGlass', component: BongsGlassComponent  },
  {path: '**', redirectTo:'Home'},
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
