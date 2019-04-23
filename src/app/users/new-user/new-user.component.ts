import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {
newuserForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.newuserForm = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
      phone: new FormControl()

});
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.newuserForm.value);
  }
}
