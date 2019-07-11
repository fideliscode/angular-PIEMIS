import { Component, OnInit , Input } from '@angular/core';
import { Internship} from 'src/app/internship.interface';
import { User} from 'src/app/user.interface';

import { Router} from '@angular/router';
import { InternshipService} from 'src/app/internship.service';
@Component({
  selector: 'app-intern',
  templateUrl: './intern.component.html',
  styleUrls: ['./intern.component.scss']
})
export class InternComponent implements OnInit {
@Input() intern: User;
@Input() showPosition: boolean;
view:boolean;

constructor(private router: Router, private internshipService: InternshipService) {
  	this.view=false;
  }

ngOnInit() {
   }


}