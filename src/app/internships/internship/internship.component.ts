import { Component, OnInit , Input } from '@angular/core';
import {Internship} from 'src/app/internship.interface';
@Component({
  selector: 'app-internship',
  templateUrl: './internship.component.html',
  styleUrls: ['./internship.component.scss']
})
export class InternshipComponent implements OnInit {
@Input() 
singleInternship: Internship;
  constructor() { }

  ngOnInit() {
  }

}
