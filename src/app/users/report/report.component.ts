import { Component, OnInit } from '@angular/core';
// import { UserService } from 'src/app/user.service';
// import { InternshipService} from 'src/app/internship.service';
// import { Router} from '@angular/router';
// import { User} from 'src/app/user.interface';
// import { Internship} from 'src/app/internship.interface';
// import { AuthService} from 'src/app/auth.service';
// import { Application } from 'src/app/application.interface';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

// getApplications(){
//   const id = localStorage.getItem('userid');
//     return this.httpclient.get(this.Apiurl+'/applications/notifications/' + id)
//     .pipe(
//       map((res: any)=>{
//         return res;
//       })
//     );
   
//   } 