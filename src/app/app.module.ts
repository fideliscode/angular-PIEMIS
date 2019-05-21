import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { AuthService } from 'src/app/auth.service';
import { AuthGuard } from './auth.guard';

export function tokenGetter() {
  return localStorage.getItem('token');
}



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    //JwtModule.forRoot({
    //  config: {
    //    tokenGetter: function  tokenGetter() {
        //     return     localStorage.getItem('token');},
      //  whitelistedDomains: ['localhost:4200'],
    //  //  blacklistedRoutes: ['http://localhost:4200/users']
    //  }
  //  })
  ],
  providers: [
    AuthGuard,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
