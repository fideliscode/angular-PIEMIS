import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-internship',
  templateUrl: './new-internship.component.html',
  styleUrls: ['./new-internship.component.scss']
})
export class NewInternshipComponent implements OnInit {
internshipForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.internshipForm = new FormGroup({
          firstName: new FormControl(),
          lastName: new FormControl(),
          email: new FormControl(),
          password: new FormControl(),
          phone: new FormControl()
});
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.internshipForm.value);
  }

}
