import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree,Router,CanActivate} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService} from 'src/app/auth.service';
import { UserService } from 'src/app/user.service';

@Injectable({
  providedIn: 'root'
})
export class NewInternshipGuard implements CanActivate {

	constructor(public authService: AuthService,private router: Router, public userService:UserService){

 }
 canActivate( next: ActivatedRouteSnapshot,state: RouterStateSnapshot):
 Observable<boolean>| Promise<boolean> | boolean | UrlTree
 {
      if(this.authService.Authenticated() && (this.authService.getRole()=='professional')){
		  this.userService.getUser().subscribe((res: any)=>{
		      
		      if (!res.user.company.companyName) {
		       return this.router.parseUrl("/users/register-company");
		      }
		      else{
		      	return  true;
		      }
		     });

      }else{
        	return this.router.parseUrl("/users/login");
     
      }
  }
}
  


