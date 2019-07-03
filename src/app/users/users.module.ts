import { NgModule } from '@angular/core';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users/users.component';
import { NewUserComponent } from './new-user/new-user.component';
import { NewInternComponent } from './new-intern/new-intern.component';
import { NewProfessionalComponent } from './new-professional/new-professional.component';
import { InternDashboardComponent } from './intern-dashboard/intern-dashboard.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { ProfessionalDashboardComponent } from './professional-dashboard/professional-dashboard.component';
import { CommonModule} from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { CompanyRegistrationComponent } from './new-professional/company-registration/company-registration.component';
import { EmailConfirmationComponent } from './email-confirmation/email-confirmation.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

@NgModule({
  declarations: [UsersComponent,NewUserComponent,  
    NewInternComponent,
    NewProfessionalComponent,
    InternDashboardComponent,
    UserloginComponent,
    ProfessionalDashboardComponent,
    CompanyRegistrationComponent,
    EmailConfirmationComponent,
    AdminDashboardComponent,
    
  ],
  imports: [
    UsersRoutingModule,
    SharedModule,
    CommonModule
   
  ]
})
export class UsersModule { }
