import { Component, OnInit } from '@angular/core';
import {NewInternshipComponent} 
from 'src/app/internships/new-internship/new-internship.component';
import { from } from 'rxjs';


@Component({
  selector: 'app-professional-dashboard',
  templateUrl: './professional-dashboard.component.html',
  styleUrls: ['./professional-dashboard.component.scss']
})
export class ProfessionalDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
