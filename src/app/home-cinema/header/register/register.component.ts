import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_core/model/User';
import { DataService } from 'src/app/_core/service/data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private data: DataService,private router: Router) { }

  ngOnInit() {
  }
  RegisterUser = (value) => {
    let objNguoiDung = {
      TaiKhoan: value.Username,
      MatKhau: value.Password,
      Email: value.Email,
      SoDT: value.Phonenumber,
      MaNhom: "GP07",
      MaLoaiNguoiDung: "KhachHang"
    };
    console.log(objNguoiDung)
    const uri = `QuanLyNguoiDung/ThemNguoiDung`
    this.data.Post(uri, objNguoiDung).subscribe(result => {
      if (typeof result == "object") {
        alert('Sign Up Success')
        this.router.navigate(["/home"]);
      }
      else{
        alert (result)
      }
    })
  }
}
