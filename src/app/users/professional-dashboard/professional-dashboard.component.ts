import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/user.service';
import { InternshipService} from 'src/app/internship.service';
import { from } from 'rxjs';
import { Router} from '@angular/router';
import { User} from 'src/app/user.interface';
import { Internship} from 'src/app/internship.interface';
import { AuthService} from 'src/app/auth.service';
import { Application } from 'src/app/application.interface';


@Component({
  selector: 'app-professional-dashboard',
  templateUrl: './professional-dashboard.component.html',
  styleUrls: ['./professional-dashboard.component.scss']
})
export class ProfessionalDashboardComponent implements OnInit {
user: User;
internshipstab:boolean;
proInternships:Internship[]=[];
applications: Application[]=[];
internships:Internship[]=[];
notifications:number;


constructor(public userService:UserService,public authService:AuthService,
	public internshipService:InternshipService, public router: Router) { 


this.internshipstab=false;


  this.internshipService.getInternships().subscribe(
      (internships: Internship[])=>{
        this.internships = internships;
       
       for (let i = 0; i < this.internships.length; i++){
     // console.log(this.internships[i].professional);
     // console.log(localStorage.getItem('userid'));
		       if(this.internships[i].professional._id == localStorage.getItem('userid')){
		       	// console.log(theinternship);
		         this.proInternships.push(this.internships[i]);
		       }else{
		           continue;
		         }}});
  
  
  this.internshipService.getApplications()
  .subscribe((res: any)=>{
  this.applications = res.applications;
  this.notifications = res.count;
  });

}

  ngOnInit() {
  
  }
  onInternships(){
  	this.internshipstab=true;
  	}
  

}
