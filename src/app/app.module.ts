
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule} from '@angular/common/http';
import { AuthService } from 'src/app/auth.service';
import { AuthGuard } from './auth.guard';
import { CommonModule } from '@angular/common';
//import { FooterComponent} from './footer/footer.component';
import {SharedModule} from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    // FooterComponent
  
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,BrowserModule,CommonModule,SharedModule
  
  
  ],
  providers: [
    AuthGuard,
    AuthService
  ], 

  bootstrap: [AppComponent]
})
export class AppModule { }
