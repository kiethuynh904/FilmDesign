import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminCinemaRoutingModule } from './admin-cinema-routing.module';

import { AdminCinemaComponent } from './admin-cinema/admin-cinema.component';
import { AdminPageComponent } from './admin-cinema/admin-page/admin-page.component';
import { AdminListFilmComponent } from './admin-cinema/admin-page/admin-list-film/admin-list-film.component';
import { AdminFilmComponent } from './admin-cinema/admin-page/admin-list-film/admin-film/admin-film.component';
import { FormsModule} from '@angular/forms';
@NgModule({
  declarations: [AdminCinemaComponent, AdminPageComponent, AdminListFilmComponent, AdminFilmComponent],
  imports: [
    CommonModule,
    AdminCinemaRoutingModule,FormsModule
  ],
  exports:[
    AdminCinemaComponent, AdminPageComponent
  ]
})
export class AdminCinemaModule { }
