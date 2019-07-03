import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NewInternshipComponent} from '../internships/new-internship/new-internship.component';
import { FooterComponent} from '../footer/footer.component';
import { InternshipsComponent} from '../internships/internships/internships.component';
import { InternshipComponent} from '../internships/internship/internship.component';
import { TimeAgoPipe} from 'time-ago-pipe';
// import {ProfessionalGuard} from '../users/professional.guard';

@NgModule({
  declarations: [NewInternshipComponent,FooterComponent,TimeAgoPipe, InternshipsComponent,
  InternshipComponent],
  imports: [CommonModule,ReactiveFormsModule,FormsModule],
  exports: [CommonModule, ReactiveFormsModule,FooterComponent,TimeAgoPipe,
  FormsModule,NewInternshipComponent,InternshipsComponent,InternshipComponent]
})
export class SharedModule { }
