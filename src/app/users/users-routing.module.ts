import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UsersComponent} from './users/users.component';
import {UserComponent} from './user/user.component';
import { NewUserComponent } from './new-user/new-user.component';
import { InternComponent } from './user/intern/intern.component';
import { NewInternComponent} from './new-intern/new-intern.component';


const routes: Routes = [
  {path: '', component: UsersComponent},
  {path: 'user', component: UserComponent},
  {path: 'new-intern', component: NewInternComponent},
  {path: 'intern', component: InternComponent}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
