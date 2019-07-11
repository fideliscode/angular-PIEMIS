import { Component } from '@angular/core';
import { InternshipService} from './internship.service';
import { AuthService} from './auth.service';
import { UserService} from './user.service';
import { Router} from '@angular/router';
import { Internship} from 'src/app/internship.interface';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { map,tap} from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
	//Apiurl = 'http://localhost:3000';
  Apiurl = "https://node-rest-piemis.herokuapp.com";
	
  position = 'center';
  internships : Internship[]=[];
  thesearch: boolean;
  company:string;
	
  constructor(public internshipService: InternshipService, public router:Router,private httpclient: HttpClient,
    public authService: AuthService, public userService: UserService){
		this.thesearch = false;
		this.position='center';
    this.company = localStorage.getItem('company');
    if (this.company == 'undefined') {
      this.company="My";
    }else{
      this.company = localStorage.getItem('company');
    }
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
