import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-new-internship',
  templateUrl: './new-internship.component.html',
  styleUrls: ['./new-internship.component.scss']
})
export class NewInternshipComponent implements OnInit {
internshipForm: FormGroup;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.internshipForm = new FormGroup({
          fname: new FormControl(),
          lname: new FormControl(),
          email: new FormControl(),
          password: new FormControl(),
          phone: new FormControl()
});
  }
  onSubmit() {
    console.log(this.internshipForm.value.password);
    this.userService.regProfessional(
      this.internshipForm.value.fname,
      this.internshipForm.value.lname,
      this.internshipForm.value.email,
      this.internshipForm.value.password,
      this.internshipForm.value.phone,
      'professional').subscribe(response => {
      alert('account created');
      this.internshipForm.reset();
      console.log(response)},
      err => {console.error(err);})
     
}}
