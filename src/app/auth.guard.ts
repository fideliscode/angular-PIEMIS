import { Injectable } from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth.service';


@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
        private router: Router,
        private authService:AuthService

    ) { }

    canActivate(): boolean{
      if (this.authService.loggedIn ()) {
        console.log('true');
        return true;
      } else {
        console.log('false')
        this.router.navigate(['/login'])
  return false
      }
}
}
