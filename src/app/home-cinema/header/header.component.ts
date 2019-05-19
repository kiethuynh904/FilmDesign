import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from 'src/app/_core/service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() public sidenavToggle = new EventEmitter();
  constructor(private data: DataService, private router: Router, ) { }
  userValid: boolean = true;
  userName: any;
  ngOnInit() {
   
  }
  ngDoCheck(){
    this.CheckUser();
  }
  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }
  LoginUser = (user) => {
    const uri = `QuanLyNguoiDung/DangNhap?TaiKhoan=${user.Username}&MatKhau=${user.Password}`;
    this.data.Post(uri).subscribe((result) => {
      if (result === "Tài khoản hoặc mật khẩu không đúng !") {
        alert(result);

      } else {
        localStorage.setItem("user", JSON.stringify(result));
        alert("Login thành công");

        this.router.navigate(["/home"]);
      }
    })
  }
  CheckUser = () => {
    if (localStorage.getItem("user")) {
      this.userValid = false;
      this.userName = JSON.parse(localStorage.getItem("user")).TaiKhoan
    }
    else{
      this.userValid = true;
    }
  }
  LogOut = () => {
    localStorage.removeItem("user");
    this.router.navigate(["/home"]);
  }
}
