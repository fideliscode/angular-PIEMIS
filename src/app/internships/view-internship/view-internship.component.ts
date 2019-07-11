import { Component, OnInit, ElementRef } from '@angular/core';
import { InternshipService} from 'src/app/internship.service';
import { Internship} from 'src/app/internship.interface';
import { Router} from '@angular/router';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { map,tap} from 'rxjs/operators';

@Component({
  selector: 'app-view-internship',
  templateUrl: './view-internship.component.html',
  styleUrls: ['./view-internship.component.scss']
})
export class ViewInternshipComponent implements OnInit {
	internship:Internship;
	overview:boolean;
	review:boolean;
	active1:string="active";
	active2:string="";
	active3:string="";
	intern:string;
	status:string;
	notactive:boolean;
	message:string;
  thealert:string;
  apply:boolean=false;
  showalert:boolean=false;
  alerttype:string;
  //Apiurl = 'http://localhost:3000';
  Apiurl = "https://node-rest-piemis.herokuapp.com";

  constructor(private httpclient:HttpClient,public internshipService:InternshipService, public router: Router
   ) {
    this.alerttype="danger"
  this.overview =true; 
  this.review=false;
  this.notactive=false;
  this.apply=false;
      this.showalert=false;
  	this.internship = this.internshipService.getCurrentInternship();
  	if (!this.internship) 
  		this.router.navigate(['home']);
  	return;
  	
  }

  ngOnInit() {
  }
  
  onApply(){

this.apply=true;

  const role = localStorage.getItem('role');
  if(role == "intern"){
               this.intern = localStorage.getItem('userid');
               this.status = "pending";
               if(this.internship._id){ 

               this.internshipService.applyIternship(this.intern,this.status,
              this.internship._id, this.internship.professional._id)
             .subscribe((res)=>{
               if(res.message == "exist"){
                 this.alerttype="danger";
                 this.showalert = true;
                this.thealert ="You have already applied this internship, Please wait for response!";
               }else{
                 this.alerttype="success";
                 this.showalert = true;
                this.thealert ="Application sent";
               }
          
             });
        }
        else{  alert("Please select an internship"); }

  }else
  {
    this.showalert = true;

    //this.thealert ="You have to login as Intern to apply to the internship";
    alert("You have to login as Intern to apply to the internship");
    this.router.navigate(['users/login']);
  }
  
  }



  onOverview(el){
  	this.active1="active";
  	this.active2="";
  	this.active3="";
    el.scrollIntoView({behavior: 'smooth'});
  }
  
  
  onReview(el){
  	this.active1="";
  	this.active2="active";
  	this.active3="";
   el.scrollIntoView({behavior: 'smooth'});
  }
  
  onFAQ(el){
    this.active1="";
  	this.active2="";
  	this.active3="active";
   el.scrollIntoView({behavior: 'smooth'});
  }

}
