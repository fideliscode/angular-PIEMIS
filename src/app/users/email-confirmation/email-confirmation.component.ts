import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params, ParamMap } from '@angular/router';
import { UserService } from 'src/app/user.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-email-confirmation',
  templateUrl: './email-confirmation.component.html',
  styleUrls: ['./email-confirmation.component.scss']
})
export class EmailConfirmationComponent implements OnInit {

  email:string;
  constructor(public userService:UserService,public route: ActivatedRoute,
    public router: Router){
    this.email='';
  }
 
  ngOnInit() {
  	//queryParamsMap
    let Token = this.route.snapshot.queryParams['token'];
    this.email = this.route.snapshot.queryParams['email'];
    
    this.userService.emailConfirm(Token).subscribe(
      (res)=>{
      	
        if(res.user){
          localStorage.setItem('email',res.user.email); 
          localStorage.setItem('userid', res.user._id);
          if(res.user.role == "intern"){
          this.router.navigate(['users/login']);
          }
          else if(res.user.role =="professional"){
          this.router.navigate(['users/login']);
          }
        }
        else if(res.message =="token expired"){
        	console.log("experied");
          const email =  this.userService.getEmail();
          if (email=='null' || email =='undefined') {
          	this.router.navigate(['users/new-user']);
          }
          //resend the token
          else{
            this.userService.resendToken(email);
          } 
        }
        else if(res.message == "no token"){
          this.router.navigate(['users/new-user']);
        }
        
      }
    ); 
  	 
    }
  
  	
  


}
