import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

declare var swal: any;
@Injectable({
  providedIn: 'root'
})
export class CheckAdmin implements CanActivate {
  constructor(private router: Router) {
  }
  
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (localStorage.getItem("user") && JSON.parse(localStorage.getItem("user")).MaLoaiNguoiDung =="QuanTri") {
      return true;
    }
    else {
      swal("","Check your access permissions on this resource!","error");
      this.router.navigate(['/home']);
      return false;
    }
  }
 
}
