import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeCinemaComponent } from './home-cinema.component';
import { HomePageComponent } from './home-page/home-page.component';
import { DetailFilmComponent } from './home-page/list-film/detail-film/detail-film.component';
import { RegisterComponent } from './header/register/register.component';
import { AuthenGuard } from '../_core/guard/authen.guard';




const routes: Routes = [
  {
    path: '', component: HomeCinemaComponent, children: [
      {
        path: '', component: HomePageComponent
      },
      {
        path: 'register', component: RegisterComponent
      },
      {
        path: 'detail/:id', component: DetailFilmComponent
      },
      {
        path: 'showtimes', loadChildren: './showtime/show-time.module#ShowTimeModule',canActivate:[AuthenGuard]
      },
      { path: '**', redirectTo: 'home', pathMatch: 'full' }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeCinemaRoutingModule { }