import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router'
import { DataService } from './../../../../_core/service/data.service'
@Component({
  selector: 'app-detail-film',
  templateUrl: './detail-film.component.html',
  styleUrls: ['./detail-film.component.scss']
})
export class DetailFilmComponent implements OnInit {
  id: any;
  tenPhim: any;
  detailMovie: any;
  trailer:any;
  constructor(private data: DataService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getParams();
    this.getDetailFilm();
  }
  getParams() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    console.log(this.id);
    // this.activatedRoute.queryParams.subscribe((params: any) => {// nhan nhieu tham so tren url
    //   this.tenPhim = params.tenPhim;
    //   this.trailer = params.trailer;
    // })
    // console.log(this.trailer)
    // console.log(this.tenPhim);
    
  }
  getDetailFilm(){
    const uri = `QuanLyPhim/LayChiTietPhim?MaPhim=${this.id}`
    this.data.Get(uri).subscribe((result) =>{
      console.log(result)
      this.detailMovie = result
    })
  }
}
