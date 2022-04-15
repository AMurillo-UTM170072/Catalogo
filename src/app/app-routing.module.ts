import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './landPage/home/home.component';

const routes: Routes = [
  {path: 'main', component: HomeComponent },
  {path: '**', redirectTo:'main'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
