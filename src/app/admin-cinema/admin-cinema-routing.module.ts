import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminCinemaComponent } from './admin-cinema/admin-cinema.component';
import { AdminPageComponent } from './admin-cinema/admin-page/admin-page.component';


const routes: Routes = [
  {
    path: '', component: AdminCinemaComponent, children: [
      {
        path: '', component: AdminPageComponent
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminCinemaRoutingModule { }