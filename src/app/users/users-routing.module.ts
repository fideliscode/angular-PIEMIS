import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UsersComponent} from './users/users.component';
import { NewUserComponent } from './new-user/new-user.component';
import { NewInternComponent} from './new-intern/new-intern.component';
import { NewProfessionalComponent} from './new-professional/new-professional.component';
import { UserloginComponent } from './userlogin/userlogin.component';




const routes: Routes = [
  {path: '', component: UsersComponent},
  {path: 'new-user', component: NewUserComponent},
  {path: 'new-intern', component: NewInternComponent},
  {path: 'new-professional', component: NewProfessionalComponent},
  {path: 'login', component:UserloginComponent},



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
