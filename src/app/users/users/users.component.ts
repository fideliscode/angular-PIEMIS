import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  usersForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.usersForm = new FormGroup({
          firstName: new FormControl(),
          lastName: new FormControl(),
          email: new FormControl(),
          password: new FormControl(),
          phone: new FormControl()
});
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.usersForm.value);

}
}
