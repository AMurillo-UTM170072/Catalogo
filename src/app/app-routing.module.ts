import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './landPage/home/home.component';
//import { PageNotFoundComponent } from  

const routes: Routes = [
  {path: 'Home', component: HomeComponent },
  {path: '**', redirectTo:'Home'}
  /* ,
  { path: '**', component: PageNotFoundComponent }, */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
