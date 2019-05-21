import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/user.service';
import { HttpResponse }  from '@angular/common/http';
import {InternshipService} from 'src/app/internship.service';
import {User} from 'src/app/user.interface';


@Component({
  selector: 'app-new-internship',
  templateUrl: './new-internship.component.html',
  styleUrls: ['./new-internship.component.scss']
})
export class NewInternshipComponent implements OnInit {
  internshipForm:FormGroup;
  internshipfile:FormGroup;
  uploadedFile: File = null;
  attachfile: boolean;


  constructor(public userService: UserService, public internshipService: InternshipService) {
    this.attachfile = false;
    }

  ngOnInit() {
    this.internshipForm = new FormGroup({
      internshipPosition: new FormControl(), // required
      description: new FormControl(), // required
      qualifications: new FormControl(), // required
      subcategory: new FormControl(),
      tag1: new FormControl(),
      tag2: new FormControl(),
      tag3: new FormControl(),
    });
  }
  onFileSelected(element) {
    this.uploadedFile= element.target.files[0] as File;
    console.log(this.uploadedFile);
  }
    
    oncreateInternship(){
   this.internshipService.regInternship(this.internshipForm.value)
   .subscribe(
      () => {
        this.internshipForm.reset();
      }
      );
    }
    
    onAttachFile(){
      this.attachfile = true;
    }
}
