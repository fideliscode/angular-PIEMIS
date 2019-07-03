import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { map,tap} from 'rxjs/operators';
import { Router} from '@angular/router';
import { User} from './user.interface';
import { FindValueOperator } from 'rxjs/internal/operators/find';


@Injectable({
providedIn: 'root'
})

export class AuthService {
  user: User;
  user_id:string;
  user_role:string;
  company_name:string;
  userid:string;
  token:string;
  message:string;
  fail=false;
 
  Apiurl = 'http://localhost:3000';
  //  Apiurl = 'https://node-rest-piemis.herokuapp.com';
    constructor(private httpClient: HttpClient,private router: Router) { }

    login(email: string, password: string){
      const body = JSON.stringify({email, password});
      console.log(body);
      return this.httpClient.post(this.Apiurl+ '/users/login', body ,{headers :new HttpHeaders({'Content-Type': 'application/json',  'X-Requested-With': 'XMLHttpRequest'})})
      .pipe(
       map((res: any)=>{
            this.message = res.message;
           if(res.user){
             this.fail=false;
             this.user = res.user;
             this.user_id = res.user._id;
             this.user_role = res.user.role;
             this.company_name = res.user.company.companyName;
             this.token = res.token;
            
            return {token:this.token,user_id:this.user_id,user_role:this.user_role,
              user:this.user,message:this.message, company:this.company_name}
           } else{

             this.fail=true;
             return {token:null,user_id:null,user_role:null,fail:this.fail,
              user:null,message:this.message, company: null};
           }
           
          })
       )
       .pipe(
        tap(
         
            loginData=>{
          localStorage.setItem('token', loginData.token);
          localStorage.setItem('userid', loginData.user_id);
          localStorage.setItem('role', loginData.user_role);
          localStorage.setItem('company', loginData.company);
          
          }
          
          
          
        ));

    }

Authenticated(){ 
  this.token = this.getToken();
 
  if (this.token === null) {
    // console.log('NOT autheticated');
  return false;
  } else{
    // console.log('authoticated!');
  return true;}
  }

getProCompany(){
  var company = localStorage.getItem('company');
  
  if(!company){
    // console.log("company is NOT registered");
    return false;
  }
  else{
    console.log("company is registered");
      return true;
    }
    
    // return localStorage.getItem('company');
    }
getUserid(){
      this.userid = localStorage.getItem('userid');
      return localStorage.getItem('userid');
      }
getRole(){
      return localStorage.getItem('role');
        }
getToken(){
      return localStorage.getItem('token');
          }
logout(){
      localStorage.removeItem('token');
      localStorage.clear();
      this.router.navigate(['/home']);
       }

loginfail(){
  return this.fail;
}
}
