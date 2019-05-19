import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowTimeRoutingModule } from './show-time-routing.module';
import { ShowtimeComponent } from './showtime.component';
import { ListChairComponent } from './list-chair/list-chair.component';
import { ChairComponent } from './list-chair/chair/chair.component';

@NgModule({
  declarations: [ShowtimeComponent,ListChairComponent,ChairComponent],
  imports: [
    CommonModule,ShowTimeRoutingModule
  ],
  exports:[
    ShowtimeComponent,ListChairComponent,ChairComponent
  ]
})
export class ShowTimeModule { }
