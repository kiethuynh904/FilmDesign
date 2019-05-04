import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeCinemaComponent } from './home-cinema.component';
import { NewsComponent } from './news/news.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  {
    path: '', component: HomeCinemaComponent, children: [
      {
        path: '', component: HomePageComponent
      },
      {
        path: 'news', component: NewsComponent
      },

    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeCinemaRoutingModule { }