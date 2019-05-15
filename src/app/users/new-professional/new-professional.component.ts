import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/user.service';
import {User} from 'src/app/user.interface';
import {InternshipService} from 'src/app/internship.service';




@Component({
  selector: 'app-new-professional',
  templateUrl: './new-professional.component.html',
  styleUrls: ['./new-professional.component.scss']
})

export class NewProfessionalComponent implements OnInit {
personalForm: FormGroup;
companyForm: FormGroup;
user: User;
hide: string;
type: string;

  constructor(private userService: UserService, private internshipService: InternshipService) {
    this.hide = 'show';
    this.type = 'password';

   }

  ngOnInit() {
    this.personalForm = new FormGroup({
         fname: new FormControl(),
         lname: new FormControl(),
         email: new FormControl(),
         password: new FormControl(),
         phone: new FormControl()
});
    this.companyForm = new FormGroup({
         companyName: new FormControl(),
         industryType: new FormControl(),
         noEmployees: new FormControl(),
         website: new FormControl(),
         address: new FormControl(),
         region: new FormControl()
});

  }
  toggle() {
      if (this.hide !== 'show') {
        this.hide = 'show';
        this.type = 'password';
      } else {
        this.hide = 'hide';
        this.type = 'text';
      }
  }
  onPersonalSubmit() {
     this.userService.regProfessional(
      this.personalForm.value.fname,
      this.personalForm.value.lname,
      this.personalForm.value.email,
      this.personalForm.value.password,
      this.personalForm.value.phone,
      'professional')
     .subscribe(
       () => {
         this.personalForm.reset();
       }
       );

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
      () => {
        this.companyForm.reset();
      }
      );

  }
}
