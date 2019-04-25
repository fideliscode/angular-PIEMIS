import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/user.service';
import { HttpResponse }  from '@angular/common/http';



@Component({
  selector: 'app-new-internship',
  templateUrl: './new-internship.component.html',
  styleUrls: ['./new-internship.component.scss']
})
export class NewInternshipComponent implements OnInit {
internshipForm: FormGroup;
companyForm: FormGroup;
Alertsms: boolean;
  
  constructor(private userService: UserService) { 
    this.Alertsms=false;}

  ngOnInit() {
    this.internshipForm = new FormGroup({
         fname: new FormControl(),
         lname: new FormControl(),
         email: new FormControl(),
         password: new FormControl(),
         phone: new FormControl()
});
        this.companyForm = new FormGroup({
         companyName: new FormControl(),
         industryType: new FormControl(),
         website: new FormControl(),
         address: new FormControl(),
         country: new FormControl()
});
  }
  
  onSubmit() {
     this.userService.regProfessional(
      this.internshipForm.value.fname,
      this.internshipForm.value.lname,
      this.internshipForm.value.email,
      this.internshipForm.value.password,
      this.internshipForm.value.phone,
      'professional')
     .subscribe(
       ()=>{
         this.Alertsms=true;
         this.internshipForm.reset();
         
       }
       );

  
     
}


}
