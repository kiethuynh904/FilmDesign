import { Component, OnInit } from '@angular/core';
import mixitup from 'mixitup';
import { DataService } from 'src/app/_core/service/data.service';
import {Phim} from '../../../_core/model/Phim';
@Component({
    selector: 'app-list-film',
    templateUrl: './list-film.component.html',
    styleUrls: ['./list-film.component.scss']
})
export class ListFilmComponent implements OnInit {
    listFilmNow:Array<Phim> = []
    ListFilmCommingSoon = [
        {   DanhGia: 7,
            HinhAnh: "http://svcy2.myclass.vn/hinhanh/phim/john-wick-3-parabellum.jpg",
            MaNhom: "GP05",
            MaPhim: 137,
            MoTa: "Hành Động",
            NgayKhoiChieu: "2019-05-17T00:00:00",
            TenPhim: "John Wick 3: Parabellum",
            Trailer: "https://www.youtube.com/watch?v=pU8-7BX9uxs&t"},
    ]
    constructor(private data: DataService) { }

    ngOnInit() {
        //GET LIST FILM 
        this.getListFilm();
        //END GET LIST FILM
        //MIXITUP SCRIPT
        var containerEl = document.querySelector('.list-film');
        var mixer = mixitup(containerEl, {

            animation: {
                effectsOut: 'fade translateY(100%)',
                // nudge: true,
                // reverseOut: false,
                duration: 500

            }
        });
        mixer.filter('.tab-1')
            .then(function (state) {
                console.log(state.activeFilter.selector);
            });
        //END MIXITUP SCRIPT  
    }
    getListFilm() {
        const uri = "QuanLyPhim/LayDanhSachPhim?MaNhom=GP09";
        this.data.Get(uri).subscribe((result: any) => {
            this.listFilmNow = result;
            
        })
    }
}
