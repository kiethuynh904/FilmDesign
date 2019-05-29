import { Component, OnInit } from '@angular/core';
import { DataService } from './../../../_core/service/data.service'
import { ActivatedRoute, ParamMap } from '@angular/router'
import { summaryFileName } from '@angular/compiler/src/aot/util';
declare var swal: any;
@Component({
  selector: 'app-list-chair',
  templateUrl: './list-chair.component.html',
  styleUrls: ['./list-chair.component.scss']
})
export class ListChairComponent implements OnInit {
  maLichChieu: any;
  listChair: any = [];
  listChairBooking: any = [];
  filmPicture: any;
  filmName: any;
  filmContent: any;
  filmRate: any;
  sum: number = 0;
  maGhe: any
  userName: any = JSON.parse(localStorage.getItem("user")).TaiKhoan

  constructor(private data: DataService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getParams();
    this.getListChair();
  }
  getParams = () => {
    this.maLichChieu = this.activatedRoute.snapshot.paramMap.get("MaLichChieu");
    this.activatedRoute.queryParams.subscribe((params) => {
      this.filmName = params.filmName;
      this.filmPicture = params.filmPicture;
      this.filmContent = params.filmContent;
      this.filmRate = params.filmRate;
    })
  }
  getListChair = () => {
    const uri = `QuanLyPhim/ChiTietPhongVe?MaLichChieu=${this.maLichChieu}`
    this.data.Get(uri).subscribe((result) => {
      this.listChair = result;
      console.log(this.listChair.DanhSachGhe)
    })
  }
  CheckOut = () => {
    let mess = confirm('Are you sure want to buy this ticket?')
    if (mess == true) {
      const uri = `QuanLyDatVe/DatVe`
      let objVe = {
        MaLichChieu: this.maLichChieu,
        TaiKhoanNguoiDung: this.userName,
        DanhSachVe: this.listChairBooking
      }
      this.data.Post(uri, objVe).subscribe((result) => {
        swal("SUCCESS", result, "success");
      })
      console.log(objVe);
    }
  }

  EventChooseChairParent(chairBooking: boolean, value) {
    let ve: { MaGhe: string, GiaVe: number } = {
      MaGhe: value.MaGhe,
      GiaVe: 75000
    }
    for (let item of this.listChair.DanhSachGhe) {
      if (chairBooking == true && value.MaGhe == item.MaGhe) {
        this.listChairBooking.push(ve);
        console.log(this.listChairBooking);
      }
      else if (chairBooking == false && value.MaGhe == item.MaGhe) {
        this.DeleteChair(value.MaGhe)
      }
    }
    this.SumPrice();
  }
  DeleteChair(maGhe) {
    this.listChairBooking.map((item, index) => {
      if (maGhe == item.MaGhe) {
        this.listChairBooking.splice(index, 1)
      }
    })
  }
  SumPrice() {
    this.sum = this.listChairBooking.reduce((sum: number, item) => sum += item.GiaVe, 0)
    console.log(this.sum)
  }
}
