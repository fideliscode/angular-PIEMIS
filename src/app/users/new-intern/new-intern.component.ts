import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/user.service';
import { AuthService } from 'src/app/auth.service';
import { User} from 'src/app/user.interface';

@Component({
  selector: 'app-new-intern',
  templateUrl: './new-intern.component.html',
  styleUrls: ['./new-intern.component.scss']
})
export class NewInternComponent implements OnInit {
newinternForm: FormGroup;
hide: string;
type: string;
userexist:boolean;
user: User;
message:string;
submit=false;
state='false';

  constructor(public userService: UserService) {
    this.hide= 'show';
    this.type= 'password';
    this.userexist = false;
  }

  ngOnInit() {
    this.newinternForm = new FormGroup({
      fname: new FormControl(),
      lname: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
      phone: new FormControl()

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
    this.submit= true;
    // console.log(this.newinternForm.value.password);
    this.userService.regIntern(
      this.newinternForm.value.fname,
      this.newinternForm.value.lname,
      this.newinternForm.value.email,
      this.newinternForm.value.password,
      this.newinternForm.value.phone,
      'intern').subscribe(
        (response)=>{
          this.message=response.message;
          this.state = response.state;
          // console.log(response.message);
           this.newinternForm.reset();
          }
        
        );

  }
}
