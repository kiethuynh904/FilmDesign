import { Component, OnInit } from '@angular/core';
import { DataService } from './../../../_core/service/data.service'
import { ActivatedRoute, ParamMap } from '@angular/router'
@Component({
  selector: 'app-list-chair',
  templateUrl: './list-chair.component.html',
  styleUrls: ['./list-chair.component.scss']
})
export class ListChairComponent implements OnInit {
  maLichChieu: any;
  danhSachGhe: any;
  hinhAnh: any;
  tenPhim: any;
  moTa: any;
  constructor(private data: DataService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getParams();
    this.getListChair();
  }
  getParams = () => {
    this.maLichChieu = this.activatedRoute.snapshot.paramMap.get("MaLichChieu");
    console.log(this.maLichChieu);
    this.activatedRoute.queryParams.subscribe((params) => {
      this.tenPhim = params.tenPhim;
      this.hinhAnh = params.hinhAnh;
      this.moTa = params.moTa;
      console.log(this.moTa,this.tenPhim, this.hinhAnh)
    })
  }
  getListChair = () => {
    const uri = `QuanLyPhim/ChiTietPhongVe?MaLichChieu=${this.maLichChieu}`
    this.data.Get(uri).subscribe((result) => {
      this.danhSachGhe = result;
      console.log(this.danhSachGhe.DanhSachGhe)
    })
  }
}
