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
  user_fname:string;
  user_lname:string;
  user_role:string;
  company_name:string;
  userid:string;
  token:string;
  message:string;
  fail=false;
  Apiurl = 'https://node-rest-piemis.herokuapp.com';
  //Apiurl = 'http://localhost:3000';

constructor(private httpClient: HttpClient,private router: Router) { }

    getApiurl(){
      //  this.Apiurl = 'http://localhost:3000';
       const Apiurl = 'https://node-rest-piemis.herokuapp.com';
       // console.log(this.Apiurl);
        return this.Apiurl;
      }

    login(email: string, password: string){
      const body = JSON.stringify({email, password});
      this.Apiurl = this.getApiurl();
      console.log(body);
      return this.httpClient.post(this.Apiurl+ '/users/login', body ,{headers :new HttpHeaders({'Content-Type': 'application/json',  'X-Requested-With': 'XMLHttpRequest'})})
      .pipe(
       map((res: any)=>{
            this.message = res.message;
           if(res.user){
             this.user_fname=res.user.fname;
             this.user_lname=res.user.lname;
             this.fail=false;
             this.user = res.user;
             this.user_id = res.user._id;
             this.user_role = res.user.role;
             this.company_name = res.user.company.companyName;
             this.token = res.token;
            
            return {token:this.token,user_id:this.user_id,user_role:this.user_role,user_fname:this.user_fname,user_lname:this.user_lname,
              user:this.user,message:this.message, company:this.company_name}
           } else{

             this.fail=true;
             return {token:null,user_id:null,user_role:null,fail:this.fail,
              user:null,message:this.message, company: null,user_fname:null,user_lname:null};
           }
           
          })
       )
       .pipe(
        tap(
         
            loginData=>{
          localStorage.setItem('fname', loginData.user_fname);
          localStorage.setItem('lname', loginData.user_lname);
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
getName(){
  let fname= localStorage.getItem('fname');
  let lname = localStorage.getItem('lname');
  const name = fname +" " + lname;
  return name;
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
