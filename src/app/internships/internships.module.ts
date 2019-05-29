import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { InternshipsRoutingModule } from './internships-routing.module';
import { InternshipsComponent } from './internships/internships.component';
import { InternshipComponent } from './internship/internship.component';
import { NewInternshipComponent } from './new-internship/new-internship.component';
import {HttpClientModule} from '@angular/common/http';
import { FooterComponent } from '../footer/footer.component';

@NgModule({
  declarations: [InternshipsComponent, InternshipComponent, NewInternshipComponent,FooterComponent],
  imports: [
    CommonModule,
    InternshipsRoutingModule,
    ReactiveFormsModule,FormsModule,
    HttpClientModule
  ]
})
export class InternshipsModule { }
