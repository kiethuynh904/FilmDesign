import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-home-cinema',
  templateUrl: './home-cinema.component.html',
  styleUrls: ['./home-cinema.component.scss']
})
export class HomeCinemaComponent implements OnInit {
//   @ViewChild('footer') myfooter:ElementRef
//   scroll(el: HTMLElement) {
//     this.myfooter.nativeElement.scrollIntoView({behavior:"smooth"});
// }
  constructor() { }
  
  ngOnInit() {
  }

}
