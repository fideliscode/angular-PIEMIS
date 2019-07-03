import { Component, OnInit , Input } from '@angular/core';
import { Internship} from 'src/app/internship.interface';
import { Router} from '@angular/router';
import { InternshipService} from 'src/app/internship.service';
@Component({
  selector: 'app-internship',
  templateUrl: './internship.component.html',
  styleUrls: ['./internship.component.scss']
})
export class InternshipComponent implements OnInit {
@Input() internship: Internship;
view:boolean;

constructor(private router: Router, private internshipService: InternshipService) {
  	this.view=false;
  }

ngOnInit() {
   }

onView(){
	this.internshipService.setInternship(this.internship);
	this.router.navigate(['internships/view-internship']);
  }
}