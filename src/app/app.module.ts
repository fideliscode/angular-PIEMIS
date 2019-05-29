
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { AuthService } from 'src/app/auth.service';
import { AuthGuard } from './auth.guard';
import { CommonModule } from '@angular/common';
// import { FooterComponent } from './footer/footer.component';


export function tokenGetter() {
  return localStorage.getItem('token');
}



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    // FooterComponent
  
  ],
  imports: [
  
    AppRoutingModule,
    HttpClientModule,BrowserModule
  
  
  ],
  providers: [
    AuthGuard,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
