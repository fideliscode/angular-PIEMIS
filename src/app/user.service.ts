import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable} from 'rxjs';
import { map,tap} from 'rxjs/operators';
import { User} from './user.interface';
import { Router} from '@angular/router';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User;
  token:string;
  message:string;
  companyRegistered:boolean = false;
  state ='false';
 
  //Apiurl = 'http://localhost:3000';
  Apiurl:string;

  constructor(private httpclient: HttpClient, private router: Router, public authService:AuthService) {
    this.Apiurl = this.authService.getApiurl();
  }

regIntern(fname: string, lname: string, email: string, password: string, phone: number, role: string)
  {
    const body = JSON.stringify({fname, lname, email, password, phone, role});
    console.log(body);

    return this.httpclient.post(this.authService.getApiurl() + '/users/', body,
      {headers :new HttpHeaders({'Content-Type': 'application/json',  'X-Requested-With': 'XMLHttpRequest'})
    })
    .pipe(
   map((res: any)=>{
        console.log(res.message);
//if user exists
      if(res.message =="user_exists"){
        this.state= 'false';
        return {message:res.message,state:this.state}
      }
//if system error      
      else  if(res.message != "verify_email"){
        this.state='false';
        return {message:res.message,state:this.state};

      }else{
        this.state = 'true';
        this.message = res.message;
        return {state:this.state, message:this.message}
      }
      }))
  .pipe(tap(regdata=>{
        console.log(regdata);
       
        localStorage.setItem('state', regdata.state);}
        ));
  }

regProfessional(
  fname: string,
  lname: string,
  email: string,
  password: string,
  phone: number,
  role: string){
   localStorage.clear();
    
  const body = JSON.stringify({fname, lname, email, password, phone, role});
  return this.httpclient.post(this.authService.getApiurl() + '/users/', body,
  {headers :new HttpHeaders({'Content-Type': 'application/json',  'X-Requested-With': 'XMLHttpRequest'})})
  .pipe(
   map((res: any)=>{
        console.log(res.message);
//if user exists
      if(res.message =="user_exists"){
        this.state= 'false';
        return {message:res.message,state:this.state}
      }
//if system error      
      else  if(res.message != "verify_email"){
        this.state='false';
        return {message:res.message,state:this.state};

      }else{
        this.state = 'true';
        this.message = res.message;
        return {state:this.state, message:this.message}
      }
      }))
  .pipe(tap(regdata=>{
        console.log(regdata);
       
        localStorage.setItem('state', regdata.state);}
        ));
  }


getState(){
  return localStorage.getItem('state');
} 


emailConfirm(token){
const body = JSON.stringify({token:token});
return this.httpclient.post(this.authService.getApiurl() + '/confirmation', body,
  {headers :new HttpHeaders({'Content-Type': 'application/json',  
    'X-Requested-With': 'XMLHttpRequest'})})
.pipe(
map((res: any)=>{
   console.log(token);
   return res;
}));
}
 
resendToken(email){
  console.log(email);
  const body = JSON.stringify({email:email});
  return this.httpclient.post(this.authService.getApiurl() + '/resend', body,
  {headers :new HttpHeaders({'Content-Type': 'application/json',  
  'X-Requested-With': 'XMLHttpRequest'})})
}

getEmail(){
  return localStorage.getItem('email');
}
//getting the current user
getCurrentuser(){
    if (!this.user) {
      console.log(this.user);
     this.getUser().subscribe((user)=>{
       // this.user = user;
       return user;});
    }
    else{
      return this.user;
    }
  
  }




getUser(){
  const id = localStorage.getItem('userid');
    return this.httpclient.get(this.authService.getApiurl() +'/users/' + id)
    .pipe(
      map((res: User)=>{
        this.user = res;
      
        return this.user;
      })
    );
   
  } 

companyRegAlert(){
  return this.companyRegistered;
}

regCompany(
  companyName: string,
  industryType: string,
  noEmployees:string,
  website: string,
  address: string,
  region: string)
  {
  const id = this.getUserid();
  const body = JSON.stringify({company:{companyName,industryType,noEmployees, website, address, region}});
  console.log(body);
  return this.httpclient.put(this.authService.getApiurl() + '/users/' + id, body,
  {headers:new HttpHeaders({'Content-Type':'application/json', 'X-Requested-With': 'XMLHttpRequest' })})
  .pipe(
    map((res: any)=>{
      //indicating company registration is NOT succesful
      if(res.message == "user does not exist"){
        
        return {message:res.message, companyName:'undefined'} 
      }
      //indicating company registration is  succesful
      else if(res.user){
        localStorage.setItem('companyName', res.user.company.companyName);
        this.user = res.user;
        this.companyRegistered = true;
    
        return {companyName:this.user.company.companyName}
      }
      //indicating system error
      else{
        return res.message;
      }
    })).pipe(
      tap(
        //saving the company Name

        regdata=>{
        localStorage.setItem('companyName', regdata.companyName);
        }
      ));
  }

//getters
getCompanyName(){
    return localStorage.getItem('companyName');
  }

getUserid(){

  return localStorage.getItem('userid');
  }

updateUser(

    fname: string,
    lname: string,
    email: string,
    phone: string,
    bio:string,
    image: string,
    skills: string,
    location: string,
    Institution: string,
    //dob:Date
    )
    {const token = localStorage.getItem('token');
    const id = localStorage.getItem('userid');
    const body = JSON.stringify({

        fname: fname,
        lname:  lname,
        email: email,
        phone: phone,
        bio:bio,
        image: image,
        skills: skills,
        location: location,
        Institution:Institution,
      //  dob:dob
      });
    console.log(body);
        return this.httpclient.put(this.authService.getApiurl() + '/users/' + id , body,
          {headers :new HttpHeaders({'Content-Type': 'application/json',  'X-Requested-With': 'XMLHttpRequest'})
        })

}


}
