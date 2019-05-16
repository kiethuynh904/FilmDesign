import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowtimeComponent } from './showtime.component';
import { ListChairComponent } from './list-chair/list-chair.component';

const routes: Routes = [
  {
    path:'', component:ShowtimeComponent,children:[
        {
            path:':MaLichChieu',component:ListChairComponent
        }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowTimeRoutingModule { }