import { Component, OnInit } from '@angular/core';
import { InternshipService} from 'src/app/internship.service';
import { UserService} from 'src/app/user.service';
import { User} from 'src/app/user.interface';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  intern :User;
  interns : User[] = [];
  end:number;
  initial:number;
  count:number;
  variable:string;
  showPosition:boolean=false;

  constructor(public internshipService:InternshipService, public userService:UserService) {
    this.end=5;
    this.initial=0;
    this.variable="Next";
    this.internshipService.getInterns().subscribe(
      (interns: User[])=>{
        this.interns = interns;
        this.count = this.interns.length;
      }
    );
   }

  ngOnInit() {
  }
  
  onBrowse(){
    if((this.end > this.count) || (this.end == this.count)){  
      this.initial = 0;
      this.end = 5;
      this.variable="Next";
    }
    else{  
      this.variable="Next";   
      this.initial = this.end;
      this.end += 5;
      if(this.end-this.count> 0)
        this.variable="Prev";
       return;
      }    
  }
}