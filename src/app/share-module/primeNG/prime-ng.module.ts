import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ButtonModule} from 'primeng/button';
import {LightboxModule} from 'primeng/lightbox';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    LightboxModule
  ],
  exports:[
    ButtonModule,LightboxModule
  ]
})
export class PrimeNGModule { }
