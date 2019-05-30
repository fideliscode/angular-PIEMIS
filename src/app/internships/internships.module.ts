import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { InternshipsRoutingModule } from './internships-routing.module';
import { InternshipsComponent } from './internships/internships.component';
import { InternshipComponent } from './internship/internship.component';
import { HttpClientModule} from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [InternshipsComponent, InternshipComponent],
  imports: [
    CommonModule,
    InternshipsRoutingModule,
    ReactiveFormsModule,FormsModule,
    HttpClientModule,SharedModule
  ]
})
export class InternshipsModule { }
