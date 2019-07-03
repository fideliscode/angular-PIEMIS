import { Component, OnInit } from '@angular/core';
import { InternshipService} from 'src/app/internship.service';
import { UserService} from 'src/app/user.service';
import { Internship} from 'src/app/internship.interface';
@Component({
  selector: 'app-internships',
  templateUrl: './internships.component.html',
  styleUrls: ['./internships.component.scss']
})
export class InternshipsComponent implements OnInit {
  internship :Internship;
  internships : Internship[] = [];
  end:number;
  initial:number;
  count:number;
  variable:string;

  constructor(public internshipService:InternshipService, public userService:UserService) {
    this.end=5;
    this.initial=0;
    this.variable="Next";
    this.internshipService.getInternships().subscribe(
      (internships: Internship[])=>{
        this.internships = internships;
        this.count = this.internships.length;
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