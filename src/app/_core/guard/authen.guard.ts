import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthenGuard implements CanActivate {
  constructor(private router: Router) {
  }
   
  canActivate() {
    if (localStorage.getItem("user")) {
      return true;
    }
    else {
     alert('a')
      this.router.navigate(['/home']);
      return false;
    }
  }
}
