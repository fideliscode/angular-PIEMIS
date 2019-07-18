import { Component, OnInit , Input } from '@angular/core';
import { Internship} from 'src/app/internship.interface';
import { Router} from '@angular/router';
import { InternshipService} from 'src/app/internship.service';
import { AuthService} from 'src/app/auth.service';
@Component({
  selector: 'app-internship',
  templateUrl: './internship.component.html',
  styleUrls: ['./internship.component.scss']
})
export class InternshipComponent implements OnInit {
@Input() internship: Internship;
view:boolean;
Apiurl:string;
imageurl:string;

constructor(private router: Router, public internshipService: InternshipService, public authService: AuthService) {
  	this.view=false;
  	this.Apiurl = this.authService.getApiurl() ;

  
  	
  	
  }

ngOnInit() {
   }

onView(){
	this.internshipService.setInternship(this.internship);
	this.router.navigate(['internships/view-internship']);
  }
}