import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule, FormsModule } from '@angular/forms';
import {NewInternshipComponent} from '../internships/new-internship/new-internship.component';
import {FooterComponent} from '../footer/footer.component';
import {InternshipsComponent} from '../internships/internships/internships.component';
import {InternshipComponent} from '../internships/internship/internship.component';

@NgModule({
  declarations: [NewInternshipComponent,FooterComponent, InternshipsComponent,InternshipComponent],
  imports: [CommonModule,ReactiveFormsModule,FormsModule],
  exports: [CommonModule, ReactiveFormsModule,FooterComponent,
  FormsModule,NewInternshipComponent,InternshipsComponent]
})
export class SharedModule { }
