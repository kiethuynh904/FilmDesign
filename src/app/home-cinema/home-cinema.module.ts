import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeCinemaComponent } from './home-cinema.component';
import { HomeCinemaRoutingModule } from './home-cinema-routing.module';

import { TheaterComponent } from './theater/theater.component';
import { NewsComponent } from './news/news.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { DemoMaterialModule } from '../share-module/material-test/material-test.module';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';

import { OwlModule } from 'ngx-owl-carousel';
import { CarouselFilmComponent } from './home-page/carousel-film/carousel-film.component';
import { ListFilmComponent } from './home-page/list-film/list-film.component';
import { FilmComponent } from './home-page/list-film/film/film.component';
import { DetailFilmComponent } from './home-page/list-film/detail-film/detail-film.component';


@NgModule({
  declarations: [HomeCinemaComponent, TheaterComponent, NewsComponent, ContactComponent, HeaderComponent, FooterComponent, HomePageComponent, CarouselFilmComponent, ListFilmComponent, FilmComponent, DetailFilmComponent],
  imports: [
    CommonModule,
    HomeCinemaRoutingModule,
    DemoMaterialModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    OwlModule,
  ],
  exports: [
    HomeCinemaComponent, NewsComponent, DetailFilmComponent
  ]
})
export class HomeCinemaModule { }
