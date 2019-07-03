import { Component } from '@angular/core';
import { InternshipService} from './internship.service';
import { AuthService} from './auth.service';
import { UserService} from './user.service';
import { Router} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
	
	position = 'center';
	constructor(public internshipService: InternshipService, public router:Router,
    public authService: AuthService, public userService: UserService){
		
		this.position='center';
	}
  title = 'Unintern';
  
  getposition(e:number){
  	if (e >1){
  		this.position ="left";
  	}else{
  		this.position = "center";
  	}
  }
  Logout(){
    return this.authService.logout();
    this.router.navigate(['/']);
  }
}
