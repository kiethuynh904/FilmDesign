import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/_core/service/data.service';
import { Phim } from './../../../../_core/model/Phim'
@Component({
  selector: 'app-admin-list-film',
  templateUrl: './admin-list-film.component.html',
  styleUrls: ['./admin-list-film.component.scss']
})
export class AdminListFilmComponent implements OnInit {
  listFilmNow: Array<Phim> = []
  public phim:Phim;
  constructor(private data: DataService) { }

  ngOnInit() {
    this.getListFilm();
  }
  getListFilm() {
    const uri = "QuanLyPhim/LayDanhSachPhim?MaNhom=GP05";
    this.data.Get(uri).subscribe((result: any) => {
      this.listFilmNow = result;
      console.log(this.listFilmNow)
    })
  }
  // getInfoUpdate(id) {
  //   this.listFilmNow.map((film) => {
  //     if(film.MaPhim == id){
        
  //     }
  //   })
  // }
  ThemPhim(phim:Phim,fileImg:any)
  {
    phim.MaNhom = "GP05";
    phim.HinhAnh = fileImg[0].name;
    const uri =`QuanLyPhim/ThemPhimMoi`;
    this.data.Post(uri,phim).subscribe((result:any)=>{
      if(typeof result === 'object')
      {
        console.log(typeof result)
        //Thêm hình ảnh
        var formData = new FormData();
        formData.append("Files",fileImg[0])
        formData.append("TenPhim",phim.TenPhim);
        this.data.uploadFile(formData).subscribe((result) => {
          if(result === true)
          {
            this.getListFilm();
          }
        })
      }
    })
  }
  XoaPhim(id){
    console.log(id)
    const uri = `QuanLyPhim/XoaPhim?MaPhim=${id}`
    this.data.Delete(uri).subscribe((result:any) =>{
      this.getListFilm();
    })
  }
}
