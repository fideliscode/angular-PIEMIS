import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {
newuserForm: FormGroup;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.newuserForm = new FormGroup({
      fname: new FormControl(),
      lname: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
      phone: new FormControl()

});

  }
  onSubmit() {
    console.log(this.newuserForm.value.password);
    this.userService.regIntern(
      this.newuserForm.value.fname,
      this.newuserForm.value.lname,
      this.newuserForm.value.email,
      this.newuserForm.value.password,
      this.newuserForm.value.phone,
      'intern').subscribe(response => {
      alert('account created');
      this.newuserForm.reset();
      console.log(response)},
      err => {console.error(err);})

  }
}
