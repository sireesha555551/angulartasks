import { RouterModule } from '@angular/router';
import { routes } from './app.router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule,ApplicationRef } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCheckboxModule} from '@angular/material';
import {MatMenuModule} from '@angular/material';
import { HttpModule } from '@angular/http';



import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { RidesComponent } from './rides/rides.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    HomeComponent,
    ServicesComponent,
    RidesComponent,
    SignupComponent,
    LoginComponent,
    DashboardComponent,


  ],
  imports: [
    BrowserModule,
    routes,
    HttpModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MdButtonModule, 
    MdCheckboxModule,
    MatMenuModule,
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyB_uS6U4tH2CV5wwwMrDo5FH4OFyIs3DEU',
      libraries: ["places"]
    })

  ],
  exports: [MdButtonModule, MdCheckboxModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
