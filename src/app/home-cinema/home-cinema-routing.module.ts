import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeCinemaComponent } from './home-cinema.component';
import { NewsComponent } from './news/news.component';
import { HomePageComponent } from './home-page/home-page.component';
import { DetailFilmComponent } from './home-page/list-film/detail-film/detail-film.component';




const routes: Routes = [
  {
    path: '', component: HomeCinemaComponent, children: [
      {
        path: '', component: HomePageComponent
      },
      {
        path: 'news', component: NewsComponent
      },
      {
        path: 'detail/:id', component: DetailFilmComponent
      },
      {
        path: 'showtimes',loadChildren:'./showtime/show-time.module#ShowTimeModule'   
      },
      { path: '**', redirectTo: 'home',pathMatch:'full' }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeCinemaRoutingModule { }