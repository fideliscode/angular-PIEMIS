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


  constructor(public userService: UserService, public internshipService: InternshipService, 
  public authService: AuthService, public router:Router ){
      if(this.authService.getProCompany()){
          this.router.navigate(['users/professional-dashboard'])
      }
    
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
    this.userService.regCompany(
      this.companyForm.value.companyName,
      this.companyForm.value.industryType,
      this.companyForm.value.noEmployees,
      this.companyForm.value.website,
      this.companyForm.value.address,
      this.companyForm.value.region)
    .subscribe(
      (res) => {
        if(res.companyName != 'undefined' || res.companyName != null ){
          this.companyForm.reset();
          this.router.navigate(['users/professional-dashboard']);
        }
        this.router.navigate(['users/register-company']);
      }
      );

  }
}
