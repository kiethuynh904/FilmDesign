import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chair',
  templateUrl: './chair.component.html',
  styleUrls: ['./chair.component.scss']
})
export class ChairComponent implements OnInit {
  @Input() chair;

  
  public chairBooking: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  clickChoose() {
    this.chairBooking = !this.chairBooking;
  }
}
