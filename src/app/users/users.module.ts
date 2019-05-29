import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users/users.component';
import { NewUserComponent } from './new-user/new-user.component';
import { NewInternComponent } from './new-intern/new-intern.component';
import { NewProfessionalComponent } from './new-professional/new-professional.component';
import { InternDashboardComponent } from './intern-dashboard/intern-dashboard.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { ProfessionalDashboardComponent } from './professional-dashboard/professional-dashboard.component';
import { NewInternshipComponent } from '../internships/new-internship/new-internship.component';
import {FooterComponent} from '../footer/footer.component';



@NgModule({
  declarations: [UsersComponent, NewUserComponent,  
    NewInternComponent, NewProfessionalComponent, InternDashboardComponent,
    UserloginComponent,
    ProfessionalDashboardComponent,NewInternshipComponent,FooterComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ReactiveFormsModule,FormsModule,
   
  ]
})
export class UsersModule { }
