import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree,Router,CanActivate} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService} from 'src/app/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProfessionalGuard implements  CanActivate{
  
 constructor(private authService: AuthService,private router: Router){

 }
canActivate( next: ActivatedRouteSnapshot,state: RouterStateSnapshot):
 Observable<boolean>| Promise<boolean> | boolean | UrlTree
 {
      if(this.authService.Authenticated() && (this.authService.getRole()=='professional')){
			//change later
			console.log('111');
			return true;
      }
      else{
      	console.log('789');
      	return this.router.parseUrl("/users/login");
      }
  }
}
