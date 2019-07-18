import { Component, OnInit } from '@angular/core';
import { InternshipService} from '../internship.service';
import { AuthService} from '../auth.service';
import { UserService} from '../user.service';
import { Router} from '@angular/router';
import { Internship} from 'src/app/internship.interface';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { map,tap} from 'rxjs/operators';
import { FormControl, FormGroup, FormBuilder,} from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  searchForm:FormGroup;
  
  position = 'center';
  internships : Internship[]=[];
  thesearch: boolean;
  company="My";
  showresults:boolean;
  search:string;
  textsearch:boolean;
  thevalue:string;
  Apiurl:string;
  showcategories:boolean;
  //Apiurl = 'http://localhost:3000';


  constructor(public internshipService: InternshipService, public router:Router,private httpclient: HttpClient,
    public authService: AuthService, public userService: UserService) {
    this.showcategories=false;
    this.Apiurl = this.authService.getApiurl();
    this.thesearch = false; 
    this.textsearch = false;
if (this.internships.length > 0) {
      this.showresults = true;
      }else{
      	this.showresults = false;
      }}

  ngOnInit() {
  	this.searchForm = new FormGroup({
      searchtext: new FormControl()
  });
  }
  onCategory(){
    this.showcategories=true;
  }

   onSearch(subcat){
    this.thesearch = true;
  
    
    this.search = subcat;
    
    return this.httpclient.get(this.Apiurl+'/internships/internships/' + subcat)
    .pipe(
      map((res: any)=>{
        return res;
      })
    ).subscribe(
    (res)=>{
      this.internships = res.search;
      console.log(res.search);
      if (this.internships.length > 0) {
      this.showresults = true;
      }else{
      	this.showresults = false;
      }
    });
   
  } 



   onTextSearch(){
    this.textsearch = true;
  this.thevalue = this.searchForm.value.searchtext;
    
    console.log(this.searchForm.value.searchtext);
    
    return this.httpclient.get(this.Apiurl+'/internships/internships/text/' + this.searchForm.value.searchtext)
    .pipe(
      map((res: any)=>{
        return res;
      })
    ).subscribe(
    (res)=>{
      this.internships = res.search;
      console.log(res.search);
      if (this.internships.length > 0) {
      this.showresults = true;
      }else{
      	this.showresults = false;
      }
    });
   
  } 

}