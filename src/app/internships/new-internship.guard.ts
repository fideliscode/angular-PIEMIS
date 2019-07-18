import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree,Router,CanActivate} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService} from 'src/app/auth.service';
import { UserService } from 'src/app/user.service';

@Injectable({
  providedIn: 'root'
})
export class NewInternshipGuard implements CanActivate {
	companyname:string;

	constructor(public authService: AuthService,private router: Router, public userService:UserService){
            
 }

 canActivate( next: ActivatedRouteSnapshot,state: RouterStateSnapshot):
 Observable<boolean>| Promise<boolean> | boolean | UrlTree
 {
 	// this.userService.getUser().subscribe((res: any)=>{
		//       this.companyname = res.company.companyName
		//       console.log(this.companyname);});


      if(this.authService.Authenticated() && (this.authService.getRole()=='professional')){
		 this.companyname = localStorage.getItem('company');
		      if (this.companyname) {
		      	return  true;
		      }
		      else{
		      		console.log("am registering company");
		       return this.router.parseUrl("/users/register-company");
		      }
		    

      }
      else{
        	return this.router.parseUrl("/users/login");
     
      }
  }
}
  


