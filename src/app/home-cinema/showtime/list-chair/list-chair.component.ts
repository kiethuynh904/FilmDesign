import { Component, OnInit } from '@angular/core';
import { DataService } from './../../../_core/service/data.service'
import { ActivatedRoute, ParamMap } from '@angular/router'
import { summaryFileName } from '@angular/compiler/src/aot/util';
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
  constructor(private data: DataService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getParams();
    this.getListChair();
    console.log(this.sum);
  }
  getParams = () => {
    this.maLichChieu = this.activatedRoute.snapshot.paramMap.get("MaLichChieu");
    console.log(this.maLichChieu);
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
  EventChooseChairParent(chairBooking: boolean, maGhe) {
    for (let item of this.listChair.DanhSachGhe) {
      if (chairBooking == true && maGhe == item.MaGhe) {
        this.listChairBooking.push(item);
        console.log(this.listChairBooking);
      }
      else if (chairBooking == false && maGhe == item.MaGhe) {
        this.DeleteChair(maGhe)
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
    this.sum = this.listChairBooking.reduce((sum:number, item) => sum += item.GiaVe, 0)
    console.log(this.sum)
  }
}
