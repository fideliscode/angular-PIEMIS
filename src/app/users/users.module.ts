import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { NewProfessionalComponent } from './new-professional/new-professional.component';
import { NewUserComponent } from './new-user/new-user.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [UsersComponent, UserComponent, NewProfessionalComponent, NewUserComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ]
})
export class UsersModule { }
