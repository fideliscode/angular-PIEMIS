import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {NewInternshipComponent} from '../internships/new-internship/new-internship.component';
import {FooterComponent} from '../footer/footer.component';


@NgModule({
  declarations: [NewInternshipComponent,FooterComponent],
  imports: [CommonModule,ReactiveFormsModule,FormsModule],
  exports: [CommonModule, ReactiveFormsModule,FooterComponent,
  FormsModule,NewInternshipComponent]
})
export class SharedModule { }
