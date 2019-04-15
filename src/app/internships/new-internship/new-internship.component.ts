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
          internshipPosition: new FormControl(),
          internshipfunction: new FormControl(),
          internshipfile: new FormControl(),
          description: new FormControl(),
          category: new FormControl(),
          subcategory: new FormControl(),
          tags: new FormControl(),
          isPublished: new FormControl(),
});
  }

}
