import { Component, OnInit, ElementRef,ViewChild} from '@angular/core';
import { FormControl, FormGroup, FormBuilder,} from '@angular/forms';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { UserService } from 'src/app/user.service';
import { HttpResponse }  from '@angular/common/http';
import { InternshipService} from 'src/app/internship.service';
import { User} from 'src/app/user.interface';
import { Router} from '@angular/router';
import { AuthService} from 'src/app/auth.service';


@Component({
  selector: 'app-new-internship',
  templateUrl: './new-internship.component.html',
  styleUrls: ['./new-internship.component.scss']
})
export class NewInternshipComponent implements OnInit {
   
  
  internshipForm:FormGroup;
  attachfile: boolean;
  image:any;
  Apiurl:string;
  //Apiurl = 'http://localhost:3000';
  submitted=false;
  success= false;
  user:User;


  constructor(public userService: UserService, private fb:  FormBuilder,public authService:AuthService,
    private httpclient: HttpClient,private router:Router,
    public internshipService: InternshipService, private el: ElementRef) {
    this.Apiurl = this.authService.getApiurl();
      this.submitted=false;
      this.success= false;
      this.attachfile = false;
      this.createForm();
      this.userService.getUser()
      .subscribe((res: User)=>{
       this.user = res;
       });


    }

  ngOnInit() {
   
  }
  
  createForm(){
  this.internshipForm = new FormGroup({
      internshipPosition: new FormControl(),
      description: new FormControl(), 
      qualifications: new FormControl(),// required
      subcategory: new FormControl(),
      vacancy:new FormControl(),
      tag1: new FormControl(),
      tag2: new FormControl(),
      tag3: new FormControl()
    });
  }

  onFileSelected($event) : void {
      if ($event.target.files.length > 0) {
      const file = $event.target.files[0];    
      this.readThis($event.target);
    }
 
  }

  readThis(inputValue: any): void {
      var file:File = inputValue.files[0];
      var myReader:FileReader = new FileReader();
    
      myReader.onloadend = (e) => {
        
        this.image = myReader.result;      
        const pichaE: Element = document.getElementById('picha');
         pichaE.setAttribute("src", this.image);
      }
      myReader.readAsDataURL(file);
    }
    

  
    oncreateInternship(){    
      this.submitted = true; 
      console.log("pressed");
      // console.log(this.internshipPosition.nativeElement.value); 
    //locate the file element meant for the file upload.
    let inputEl: HTMLInputElement = this.el.nativeElement.querySelector('#internshipfile');
    //get the total amount of files attached to the file input.
    let fileCount: number = inputEl.files.length;
    // console.log(inputEl.files.item(0));
    // this.internshipForm.get('internshipfile').setValue(inputEl.files.item(0));
    
    let formData = new FormData();
    if (fileCount > 0) { // a file was selected
    //append the key name 'internshipfile' with the first file in the element
  
    formData.append('internshipfile', inputEl.files.item(0));
    formData.append('internshipPosition', this.internshipForm.value.internshipPosition);
    formData.append('description', this.internshipForm.value.description);
    formData.append('qualifications', this.internshipForm.value.qualifications);
    formData.append('subcategory', this.internshipForm.value.subcategory);
    formData.append('vacancy', this.internshipForm.value.vacancy);
    formData.append('tag1', this.internshipForm.value.tag1);
    formData.append('tag2', this.internshipForm.value.tag2);
    formData.append('tag3', this.internshipForm.value.tag3);
    const professional = localStorage.getItem('userid');
    formData.append('professional', professional);



  //Posting to the api end-point
  return this.httpclient.post(this.Apiurl+'/internships/', formData
  // {headers :new HttpHeaders({'Content-Type': 'application/json',
  //   'X-Requested-With': 'XMLHttpRequest'})}
  ).subscribe(
      () => {
        this.success = true;
        
      }
      );
    
  }
}
  
  

}
