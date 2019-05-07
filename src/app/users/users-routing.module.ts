import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UsersComponent} from './users/users.component';
import {NewProfessionalComponent} from './new-professional/new-professional.component'; 
import { NewUserComponent } from './new-user/new-user.component';



const routes: Routes = [
  {path: '', component: UsersComponent},
  {path: 'new-professional', component: NewProfessionalComponent},
  {path: 'new-user', component:NewUserComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
