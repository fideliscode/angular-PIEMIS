import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { InternshipsRoutingModule } from './internships-routing.module';
import { InternshipsComponent } from './internships/internships.component';
import { InternshipComponent } from './internship/internship.component';
import { NewInternshipComponent } from './new-internship/new-internship.component';

@NgModule({
  declarations: [InternshipsComponent, InternshipComponent, NewInternshipComponent],
  imports: [
    CommonModule,
    InternshipsRoutingModule,
    ReactiveFormsModule,FormsModule
  ]
})
export class InternshipsModule { }
