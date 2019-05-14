import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpclient: HttpClient) {
  }

  regIntern(fname: string, lname: string, email: string, password: string, phone: number, role: string)
  {
    const body = JSON.stringify({fname, lname, email, password, phone, role});
    console.log(body);

    return this.httpclient.post('http://127.0.0.1:3000/users', body,
      {headers :new HttpHeaders({'Content-Type': 'application/json',  'X-Requested-With': 'XMLHttpRequest'})
    })
  }

  logUser(email: string, password: string,  role: string)
  {
    const body = JSON.stringify({email, password, role});
    console.log(body);

    return this.httpclient.post('http://127.0.0.1:3000/users', body,
      {headers :new HttpHeaders({'Content-Type': 'application/json',  'X-Requested-With': 'XMLHttpRequest'})
    })
  }




  regProfessional(fname: string, lname: string, email: string, password: string, phone: number, role: string)
  {
    const body = JSON.stringify({fname, lname, email, password, phone, role});
    console.log(body);

    return this.httpclient.post('http://127.0.0.1:3000/users', body,
      {headers :new HttpHeaders({'Content-Type': 'application/json',  'X-Requested-With': 'XMLHttpRequest'})
    })
  }

}
