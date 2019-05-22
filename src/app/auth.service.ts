import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { map,tap} from 'rxjs/operators';
import { Router} from '@angular/router';
import {User} from './user.interface';


@Injectable({
providedIn: 'root'
})

export class AuthService {
  user: User;
  userid:string;
  token:string;
  message:string;
  //Apiurl ='http://localhost:3000';
   Apiurl = 'https://node-rest-piemis.herokuapp.com';
    constructor(private httpClient: HttpClient,private router: Router) { }

    login(email: string, password: string):Observable<any>{
      const body = JSON.stringify({email, password});
      console.log(body);
      return this.httpClient.post(this.Apiurl+ '/users/login', body ,{headers :new HttpHeaders({'Content-Type': 'application/json',  'X-Requested-With': 'XMLHttpRequest'})})
      .pipe(
       map(
          (res: any)=>{
            console.log('just entered map!');
              this.message = res.message;
              this.user = res.user;
              this.token = res.token;
              console.log('done kwa map');
            return {token:this.token,user:this.user,message:this.message}
          })
       )
       .pipe(
        tap(
          loginData=>{
          localStorage.setItem('token', loginData.token);
          localStorage.setItem('userid', loginData.user._id);
          localStorage.setItem('role', loginData.user.role);
          console.log('nimeweka kwa localStorage');
          }
        ));

    }

    getUserid(){
      this.userid = localStorage.getItem('userid');
      return localStorage.getItem('userid');
      }
      getRole(){
        return localStorage.getItem('role');
        }
        getToken(){
          console.log('token called!')
          return localStorage.getItem('token');
          }

logout() {
  localStorage.removeItem('token');
}
loggedIn() {
    return localStorage.getItem('token')
}
}
