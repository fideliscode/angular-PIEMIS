import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl, FormGroup,Validators} from '@angular/forms';
import { AuthService } from 'src/app/auth.service';
import { UserService } from 'src/app/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import {User} from 'src/app/user.interface';




@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.scss']
})
export class UserloginComponent implements OnInit {
loginForm: FormGroup;
submitted = false;
message = '';
user: User;
 
  type:string;
  constructor(public authService: AuthService, public formBuilder: FormBuilder,  public route: ActivatedRoute,
        public router: Router) {
          this.type= 'password';
          this.message ='';
                
          
    }

 
  ngOnInit() {

    this.loginForm = this.formBuilder.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        });
    
  }

  // convenience getter for easy access to form fields
      get f() {
         return this.loginForm.controls; }
    
  onSubmit() {
    this.submitted= true;
    // stop here if form is invalid
        if (this.loginForm.invalid) {
          console.log("invalid form!");
            this.router.navigate(['users/login']);
        } 
        else{this.authService.login(this.f.email.value, this.f.password.value)
              .subscribe(
                       (response)=>{
                              this.message = response.message;
                              const role = this.authService.getRole();
                            
                              if(response.user){

                                      if(role== 'professional'){
                                        console.log(this.message);
                                        this.loginForm.reset();
                                        this.router.navigate(['users/professional-dashboard']);
                                      }

                                      if (role == 'intern') {
                                        this.loginForm.reset();
                                        this.router.navigate(['users/intern-dashboard']);
                                      } 
                               }
                               else{
                                 
                                 localStorage.clear();
                                this.router.navigate(['users/login']);  
                                this.loginForm.reset();          
                              }

                      },
                      (err)=>{
                        alert(err.message);

                      }

                   );
          }
  }
}
