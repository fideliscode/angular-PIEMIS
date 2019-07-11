import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl, FormGroup,Validators } from '@angular/forms';
import { UserService } from 'src/app/user.service';
import { from } from 'rxjs';
import { Router} from '@angular/router';
import { User} from 'src/app/user.interface';
import { AuthService} from 'src/app/auth.service';

@Component({
  selector: 'app-intern-dashboard',
  templateUrl: './intern-dashboard.component.html',
  styleUrls: ['./intern-dashboard.component.scss']
})
export class InternDashboardComponent implements OnInit {
user:User;
role:string;
name:string;
internSettingsForm: FormGroup;
submitted = false;
userexist:boolean;
editing = false;
userid='';
editfname= '';
editlname= '';
editemail= '';
editphonenumber='';
//dob=date;
editbio='';
editlocation='';
editinstitution='';
editskills='';
editimage='';



  constructor(private userService:UserService,private authService:AuthService, private router: Router,private formBuilder: FormBuilder) {

     this.userService.getUser().subscribe((res: User)=>{
       this.user = res;
     });
    this.name = this.authService.getName();
    this.role = this.authService.getRole();

    }


  ngOnInit() {
    this.internSettingsForm = this.formBuilder.group({
            fname: ['', [Validators.required,Validators.pattern("[a-zA-Z ]*")]],
            lname: ['',[ Validators.required,Validators.pattern("[a-zA-Z ]*")]],
              email: ['', [Validators.required,Validators.email]],
                phone: ['',[ Validators.required, Validators.minLength(10),Validators.maxLength(13)]],
                  dob: ['', [Validators.required]],
                  password: ['', [Validators.required,Validators.minLength(8)]]

});
    let showcategory = false;
// this.userService.hidecategory();
  }
ngOnDestroy(){
  let showcategory = true;
//this.userService.hidecategory();

}
onSubmit() {
 this.submitted = true;
  console.log(this.internSettingsForm.value.password);
  this.userService.regIntern(
    this.internSettingsForm.value.fname,
    this.internSettingsForm.value.lname,
    this.internSettingsForm.value.email,
    this.internSettingsForm.value.password,
    this.internSettingsForm.value.phone,
    'intern').subscribe(
      (response)=>{
        if(response.message == "user exists"){
          this.userexist=true;
          console.log(response.message);
          this.internSettingsForm.reset();
        }
      }
      );
}
onEditUser()
    {
     this.editing = true;
     this.editfname = this.user.fname;
     this.editlname = this.user.lname;
     this.editemail = this.user.email;
     this.editphonenumber = this.user.phone;
     this.editbio = this.user.bio;
     this.editimage = this.user.image;
     this.editskills = this.user.skills;
     this.editlocation = this.user.location;
     this.editinstitution = this.user.Institution;
    // this.dob = this.user.dob;
}
onUpdateUser()
     {
          this.userService.updateUser(

          	this.editfname,
          	this.editlname,
          	this.editemail,
          	this.editphonenumber,
            this.editbio ,
            this.editimage ,
            this.editskills,
            this.editlocation ,
            this.editinstitution ,
          //  this.dob ,

          	)
          .subscribe( (user: Response)=>
                       {
                        this.user.fname = this.editfname;
                        this.user.lname = this.editlname;
                        this.user.email = this.editemail;
                        this.user.phone = this.editphonenumber;
                      this.user.bio=  this.editbio ;
                      this.user.image=  this.editimage ;
                      this.user.skills=  this.editskills  ;
                      this.user.location=  this.editlocation  ;
                      this.user.Institution=  this.editinstitution  ;
                      //this.user.dob=  this.dob  ;

                         this.editfname = '';
                         this.editlname = '';
                         this.editemail = '';
                         this.editphonenumber ='';
                        // this.dob=date;
                        this. editbio='';
                        this. editlocation='';
                         this.editinstitution='';
                         this.editskills='';
                         this.editimage='';

                       }
  
          );

          this.editing = false;
      }

     onCancelUser()
     {
	                       this.editfname = '';
                         this.editlname = '';
                         this.editemail = '';
                         this.editphonenumber = '';
                        // this.dob=date;
                        this. editbio='';
                        this. editlocation='';
                         this.editinstitution='';
                         this.editskills='';
                         this.editimage='';

        this.editing= false;
}
}
