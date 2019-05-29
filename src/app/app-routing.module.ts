import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
 {path: 'home', component: HomeComponent},
 {path: '', component: HomeComponent},

  {
    path: 'internships',
    loadChildren: './internships/internships.module#InternshipsModule'
  },
  {
    path: 'users',
    loadChildren: './users/users.module#UsersModule'
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
