import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable} from 'rxjs';
import { map,tap } from 'rxjs/operators';
import {User} from './user.interface';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User;
  personalForm:boolean;
  companyForm:boolean;
  complete:boolean;
  mainnav:boolean;
  Apiurl = 'https://node-rest-piemis.herokuapp.com';

  constructor(private httpclient: HttpClient) {
    this.personalForm=true;
    this.companyForm=false;
    this.complete=false;
    this.mainnav=true;
  }

  regIntern(fname: string, lname: string, email: string, password: string, phone: number, role: string)
  {
    const body = JSON.stringify({fname, lname, email, password, phone, role});
    console.log(body);

    return this.httpclient.post(this.Apiurl+ '/users/', body,
      {headers :new HttpHeaders({'Content-Type': 'application/json',  'X-Requested-With': 'XMLHttpRequest'})
    })
  }

  logUser(email: string, password: string,  role: string)
  {
    const body = JSON.stringify({email, password, role});
    console.log(body);

    return this.httpclient.post(this.Apiurl+ '/users/', body,
      {headers :new HttpHeaders({'Content-Type': 'application/json',
       'X-Requested-With': 'XMLHttpRequest'})
    });
}


regProfessional(
  fname: string,
  lname: string,
  email: string,
  password: string,
  phone: number,
  role: string){

  const body = JSON.stringify({fname, lname, email, password, phone, role});
  return this.httpclient.post(this.Apiurl+ '/users/', body,
  {headers :new HttpHeaders({'Content-Type': 'application/json',  'X-Requested-With': 'XMLHttpRequest'})})
  .pipe(
   map(
      (res: User)=>{
          this.user = res;
          this.personalForm = false;
          this.companyForm=true;
        return this.user._id;})
   )
   .pipe(
    tap(
      regdata=>{
      localStorage.setItem('user_id', this.user._id);
      }
    ));
  }


regCompany(
  companyName: string,
  industryType: string,
  noEmployees:string,
  website: string,
  address: string,
  region: string){

  const id = this.getUserid();
  const body = JSON.stringify({company:{companyName,industryType,noEmployees, website, address, region}});
  console.log(body);
  return this.httpclient.put(this.Apiurl+ '/users/' + id, body,
  {headers:new HttpHeaders({'Content-Type':'application/json', 'X-Requested-With': 'XMLHttpRequest' })})
  .pipe(
    map((res: User)=>{
      this.user = res;
      this.companyForm=false;
      this.complete=true;
      this.mainnav=false;
      return this.user;
    }));
  }

  //getters
getUserid(){
  this.user._id = localStorage.getItem('user_id');
  return localStorage.getItem('user_id');
  }

getpersonalForm(){
  return this.personalForm;
  }

getcompanyForm(){
  return this.companyForm;
  }

getcomplete(){
  return this.complete;
  }
hidemainnav(){
  return this.mainnav;
}
}
