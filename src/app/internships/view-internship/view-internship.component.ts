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
//Apiurl = 'http://localhost:3000';
Apiurl = "https://node-rest-piemis.herokuapp.com";

  constructor(private httpclient:HttpClient,private internshipService:InternshipService, private router: Router
   ) {
  this.overview =true; 
  this.review=false;
  this.notactive=false;
  	this.internship = this.internshipService.getCurrentInternship();
  	if (!this.internship) 
  		this.router.navigate(['home']);
  	return;
  	
  }

  ngOnInit() {
  }
  
  onApply(){
  	
                this.intern = localStorage.getItem('userid');
               this.status = "pending";
              
              
               if(this.internship._id){ 

				  	this.internshipService.applyIternship(this.intern,this.status,
				  		this.internship._id, this.internship.professional._id)
				   	.subscribe((res)=>{
				   		if(res.message == "exist"){
				   			alert("you have already applied this internship, Please wait for response!");
				   		}
					
			     	});
				}
				else{  alert("please select an internship"); }
					    
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
