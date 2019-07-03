import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent} from './users/users.component';
import { NewUserComponent } from './new-user/new-user.component';
import { NewInternComponent} from './new-intern/new-intern.component';
import { NewProfessionalComponent} from './new-professional/new-professional.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { InternDashboardComponent } from './intern-dashboard/intern-dashboard.component';
import { ProfessionalDashboardComponent } from './professional-dashboard/professional-dashboard.component';
import { CompanyRegistrationComponent } from './new-professional/company-registration/company-registration.component';
import { ProfessionalGuard} from "./professional.guard";
import { EmailConfirmationComponent } from "./email-confirmation/email-confirmation.component";


const routes: Routes = [
  {path: '', component: UsersComponent},
  {path: 'new-user', component: NewUserComponent},
  {path: 'new-intern', component: NewInternComponent},
  {path: 'new-professional', component: NewProfessionalComponent},
  {path: 'login', component:UserloginComponent},
  {path: 'intern-dashboard', component:InternDashboardComponent},
  {path: 'professional-dashboard', component:ProfessionalDashboardComponent, canActivate: [ProfessionalGuard]},
  {path: 'register-company', component: CompanyRegistrationComponent},
  {path: 'confirmation', component: EmailConfirmationComponent}
 




];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
