import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
userForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.userForm = new FormGroup({
          
          email: new FormControl(),
          password: new FormControl(),

});
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.userForm.value);
  }


}
