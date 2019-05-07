import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InternshipsComponent } from './internships/internships.component';
import { NewInternshipComponent } from './new-internship/new-internship.component';
const routes: Routes = [
  {path: '', component: InternshipsComponent},
  {path: 'new-internship', component: NewInternshipComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InternshipsRoutingModule { }
