import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/user.service';
import { User} from 'src/app/user.interface';
import { InternshipService} from 'src/app/internship.service';




@Component({
  selector: 'app-new-professional',
  templateUrl: './new-professional.component.html',
  styleUrls: ['./new-professional.component.scss']
})

export class NewProfessionalComponent implements OnInit {
personalForm: FormGroup;
companyForm: FormGroup;
user: User;
hide: string;
type: string;
userexist:boolean;
message:string;
submit=false;
state='false';

  constructor(public userService: UserService, public internshipService: InternshipService,
    public router:Router) {
      //redirect user to company registration if already registered
      if(this.userService.getUserid()){
        console.log("loged in");
         this.router.navigate(['users/register-company']);
      }
      else{
      this.hide = 'show';  //controlling password visibility
      this.type = 'password';
      this.userexist = false; //control alert if user already exists
      }
    


   }

  ngOnInit() {
    this.personalForm = new FormGroup({   //creating a reactive form instance
         fname: new FormControl(),
         lname: new FormControl(),
         email: new FormControl(),
         password: new FormControl(),
         phone: new FormControl()
});
   

  }
//controlling password toggle visibility
  toggle() {
      if (this.hide !== 'show') {
        this.hide = 'show';
        this.type = 'password';
      } else {
        this.hide = 'hide';
        this.type = 'text';
      }
  }
  //hadling saving of professional
  onPersonalSubmit(){     
  this.submit=true;       
     
     this.userService.regProfessional(
      this.personalForm.value.fname,
      this.personalForm.value.lname,
      this.personalForm.value.email,
      this.personalForm.value.password,
      this.personalForm.value.phone,
      'professional')
     .subscribe(
       (response)=>{
          this.message=response.message;
          this.state = response.state;
           console.log(response.message);
           this.personalForm.reset();
           // this.router.navigate(['users/company-registration']);
         }

       
       );

}




}
