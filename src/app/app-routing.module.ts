import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CheckAdmin} from './_core/guard/checkAdmin.guard';
const routes: Routes = [
  {
    path:'home',loadChildren:'./home-cinema/home-cinema.module#HomeCinemaModule'
  },
  {
    path:'admin',loadChildren:'./admin-cinema/admin-cinema.module#AdminCinemaModule',canActivate:[CheckAdmin] 
  },
  {
    path:'',redirectTo:'home',pathMatch:'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
