import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AdduserComponent } from './adduser/adduser.component';
import { CheckuserComponent } from './checkuser/checkuser.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from './adduser/adduser.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {CheckuserService} from './checkuser/checkuser.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AdduserComponent,
    CheckuserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [UserService,CheckuserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
