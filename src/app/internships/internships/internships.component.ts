import { Component, OnInit } from '@angular/core';
import {InternshipService} from 'src/app/internship.service';
import {Internship} from 'src/app/internship.interface';
@Component({
  selector: 'app-internships',
  templateUrl: './internships.component.html',
  styleUrls: ['./internships.component.scss']
})
export class InternshipsComponent implements OnInit {
  internship :Internship;
  internships : Internship[] = [];

  constructor(private internshipService:InternshipService) {
    this.internshipService.getInternships().subscribe(
      (internships: Internship[])=>{
        this.internships = internships;
        console.log(this.internships);
      }
    );
   }

  ngOnInit() {
  }

}
