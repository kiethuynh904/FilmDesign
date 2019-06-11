import { Component, OnInit, ViewChild, Input, ElementRef } from '@angular/core';
import { DataService } from 'src/app/_core/service/data.service';
import { Phim } from './../../../../_core/model/Phim'
import { FilmComponent } from 'src/app/home-cinema/home-page/list-film/film/film.component';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-admin-list-film',
  templateUrl: './admin-list-film.component.html',
  styleUrls: ['./admin-list-film.component.scss']
})
export class AdminListFilmComponent implements OnInit {
  @ViewChild('formCapNhat') tagForm: NgForm
  listFilmNow: Array<Phim> = []
  public phim: Phim;
  public phimUpdate: Phim;
  tenPhim: string = ""
  constructor(private data: DataService) { }

  ngOnInit() {
    this.getListFilm();
  }
  getListFilm() {
    const uri = "QuanLyPhim/LayDanhSachPhim?MaNhom=GP05";
    this.data.Get(uri).subscribe((result: any) => {
      this.listFilmNow = result;

    })
  }

  ThemPhim(phim: Phim, fileImg: any) {
    console.log(phim);
    phim.MaNhom = "GP05";
    phim.HinhAnh = fileImg[0].name;
    const uri = `QuanLyPhim/ThemPhimMoi`;
    this.data.Post(uri, phim).subscribe((result: any) => {
      if (typeof result === 'object') {
        console.log(typeof result)
        //Thêm hình ảnh
        var formData = new FormData();
        formData.append("Files", fileImg[0])
        formData.append("TenPhim", phim.TenPhim);
        this.data.uploadFile(formData).subscribe((result) => {
          if (result === true) {
          }
        })
      }
    })
  }

  LayThongTinUpdate(item) {
    this.tagForm.setValue({
      MaPhim: item.MaPhim,
      TenPhim: item.TenPhim,
      Trailer: item.Trailer,
      HinhAnh: "",
      MoTa: item.MoTa,
      MaNhom: item.MaNhom,
      NgayKhoiChieu: item.NgayKhoiChieu,
      DanhGia: item.DanhGia
    })
  }
  CapNhatPhim(phim: Phim, fileImg: any) {
    console.log(phim);
    const uri = `QuanLyPhim/CapNhatPhim`
    this.data.Post(uri, phim).subscribe((result: any) => {
      console.log(result);
      
      if (typeof result === 'object') {
        console.log(typeof result)
        //Thêm hình ảnh
        var formData = new FormData();
        formData.append("Files", fileImg[0])
        formData.append("TenPhim", phim.TenPhim);
        this.data.uploadFile(formData).subscribe((result) => {
          if (result === true) {
          }
        })
      }
    })
  }
  XoaPhim(id) {
    console.log(id)
    const uri = `QuanLyPhim/XoaPhim?MaPhim=${id}`
    this.data.Delete(uri).subscribe((result: any) => {
    })
  }
}
