import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeCinemaComponent } from './home-cinema.component';
import { HomeCinemaRoutingModule } from './home-cinema-routing.module';
import { ShowtimeComponent } from './showtime/showtime.component';
import { TheaterComponent } from './theater/theater.component';
import { NewsComponent } from './news/news.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { DemoMaterialModule } from '../share-module/material-test/material-test.module';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';


@NgModule({
  declarations: [HomeCinemaComponent, ShowtimeComponent, TheaterComponent, NewsComponent, ContactComponent, HeaderComponent, FooterComponent, HomePageComponent, ],
  imports: [
    CommonModule,HomeCinemaRoutingModule,DemoMaterialModule, LayoutModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule
  ],
  exports:[
    HomeCinemaComponent,NewsComponent
  ]
})
export class HomeCinemaModule { }
