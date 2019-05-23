import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

declare var swal: any;
@Injectable({
  providedIn: 'root'
})
export class AuthenGuard implements CanActivate {
  constructor(private router: Router) {
  }
  
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (localStorage.getItem("user")) {
      return true;
    }
    else {
      swal("","please login your account!","error");
      this.router.navigate(['/home'],{ queryParams: { returnUrl: state.url }});
      return false;
    }
  }
 
}
