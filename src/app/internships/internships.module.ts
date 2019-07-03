import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { InternshipsRoutingModule } from './internships-routing.module';
import { HttpClientModule} from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { ViewInternshipComponent } from './view-internship/view-internship.component';

@NgModule({
  declarations: [ViewInternshipComponent],
  imports: [
    CommonModule,
    InternshipsRoutingModule,
    ReactiveFormsModule,FormsModule,
    HttpClientModule,SharedModule
  ]
})
export class InternshipsModule { }
