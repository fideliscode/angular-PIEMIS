import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/user.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
userForm: FormGroup;
hide: string;
type: string;
  constructor(private userService: UserService) {
    this.hide= 'show';
    this.type='password';}

  ngOnInit() {
    this.userForm = new FormGroup({

          email: new FormControl(),
          password: new FormControl(),

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
  onSubmit() {
    console.log(this.userForm.value.password);
    this.userService.logUser(
      this.userForm.value.email,
      this.userForm.value.password,

      'professional').subscribe(response => {
      this.userForm.reset();
      console.log(response)},
      err => {console.error(err);})
  }


}
