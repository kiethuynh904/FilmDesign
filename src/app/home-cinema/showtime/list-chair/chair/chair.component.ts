import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-chair',
  templateUrl: './chair.component.html',
  styleUrls: ['./chair.component.scss']
})
export class ChairComponent implements OnInit {
  @Input() chair;
  @Output() EventChooseChair = new EventEmitter();
  public chairBooking: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  clickChoose() {
    this.chairBooking = !this.chairBooking;
    this.EventChooseChair.emit(this.chairBooking)
  }
}
