import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { NewUserComponent } from './new-user/new-user.component';
import { AppPasswordDirective } from './app-password.directive';
import { InternComponent } from './user/intern/intern.component';
import { NewInternComponent } from './new-intern/new-intern.component';



@NgModule({
  declarations: [UsersComponent, UserComponent, NewUserComponent,AppPasswordDirective, InternComponent, NewInternComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ReactiveFormsModule,FormsModule
  ]
})
export class UsersModule { }
