import { Component, OnInit,Input } from '@angular/core';


@Component({
  selector: 'app-admin-film',
  templateUrl: './admin-film.component.html',
  styleUrls: ['./admin-film.component.scss']
})
export class AdminFilmComponent implements OnInit {
@Input() movie;
  constructor() { }

  ngOnInit() {
  }

}
