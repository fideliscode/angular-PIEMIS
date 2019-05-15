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


  constructor(private userService: UserService, private internshipService: InternshipService) {
    this.attachfile = false;
    }

  ngOnInit() {
    this.internshipForm = new FormGroup({
      internshipPositon: new FormControl(), // required
      internshipfunction: new FormControl(), // required
      path: new FormControl(),
      filetype: new FormControl(),
      description: new FormControl(), // required
      name: new FormControl(),
      subcategory: new FormControl(),
      tag1: new FormControl(),
      tag2: new FormControl(),
      tag3: new FormControl(),
      isPublished: new FormControl(),
    });
  }
  onFileSelected(element) {
    this.uploadedFile= element.target.files[0] as File;
    console.log(this.uploadedFile);
  }
  onUpload() {
   const formData = new FormData();
   formData.append("image", this.uploadedFile, this.uploadedFile.name);
  this.internshipService.fileupload(formData)
  .subscribe(res=>console.log(res));
    }
    onATtachFile(){
      this.attachfile = true;
    }
}
