import { Component, OnInit, Input, Pipe } from '@angular/core';
import { DataService } from 'src/app/_core/service/data.service';


@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit {
  @Input() movie;


  constructor(private data: DataService) {
    
   }

  ngOnInit() { 
     
     
  }
  closeTrailer(){
    window.close();
  }
}
