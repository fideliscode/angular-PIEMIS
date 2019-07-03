import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InternshipsComponent } from './internships/internships.component';
import { NewInternshipComponent } from './new-internship/new-internship.component';
import { ProfessionalGuard} from '../users/professional.guard';
import { ViewInternshipComponent} from './view-internship/view-internship.component'

const routes: Routes = [
  {path: '', component: InternshipsComponent},
  {path: 'new-internship', component: NewInternshipComponent, canActivate: [ProfessionalGuard]},
  {path: 'internships', component:InternshipsComponent},
  {path: 'view-internship', component: ViewInternshipComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InternshipsRoutingModule { }
