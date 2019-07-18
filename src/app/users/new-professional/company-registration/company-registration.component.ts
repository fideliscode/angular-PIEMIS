import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/user.service';
import { AuthService } from 'src/app/auth.service';
import {User} from 'src/app/user.interface';
import {InternshipService} from 'src/app/internship.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-registration',
  templateUrl: './company-registration.component.html',
  styleUrls: ['./company-registration.component.scss']
})

export class CompanyRegistrationComponent implements OnInit {
companyForm: FormGroup;
user: User;
submitted:boolean;
message='';
companyname:string;
Brella = ['Bunju Enterprises','vivafriendsgroup', 'university of dar es salaam', 'another company', 'hellenlifetalks'];


  constructor(public userService: UserService, public internshipService: InternshipService, 
  public authService: AuthService, public router:Router ){
    this.submitted = false;
    this.companyname = localStorage.getItem('company');
    console.log(this.companyname);

      if(this.companyname =="undefined"){
          this.router.navigate(['/users/register-company']);
      }
      else{this.router.navigate(['/users/professional-dashboard']);}

    
   }

  ngOnInit() {

    this.companyForm = new FormGroup({
         companyName: new FormControl(),
         industryType: new FormControl(),
         noEmployees: new FormControl(),
         website: new FormControl(),
         address: new FormControl(),
         region: new FormControl()
});

  }
  
  onCompanySubmit() {
    this.submitted = true;
// for (var i = this.Brella.length - 1; i >= 0; i--) {
 console.log(this.companyForm.value.companyName);
//   if(this.companyForm.value.companyName === this.Brella[i]){
//     console.log(This.Brella[i]);
 this.userService.regCompany(
      this.companyForm.value.companyName,
      this.companyForm.value.industryType,
      this.companyForm.value.noEmployees,
      this.companyForm.value.website,
      this.companyForm.value.address,
      this.companyForm.value.region)
    .subscribe(
      (res) => {
        if( res.companyName != null ){
          this.companyForm.reset();
         this.router.navigate(['internships/new-internship']);
        }else{
          this.router.navigate(['users/register-company']);
           this.companyForm.reset();
          alert("company not registered");
        }
        
      }
      );
    // return;

//   }
//   else{

// this.message ="the company is not registered under BRELLA";
//   }
//}


}

   
}
