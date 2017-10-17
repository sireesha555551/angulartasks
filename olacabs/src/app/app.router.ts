import { DashboardComponent } from './dashboard/dashboard.component';
import { BodyComponent } from './body/body.component';


import { HeaderComponent } from './header/header.component';
import { RidesComponent } from './rides/rides.component';
import { ServicesComponent } from './services/services.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


import { ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

export const router:Routes=[

    {path:'',redirectTo:"header",pathMatch:"full"},
    {path:'header',component:HeaderComponent,children:[
        {path:'',redirectTo:"body",pathMatch:"full"},
        {path:'body',component:BodyComponent},
        
        {path:'signup',component:SignupComponent},
        {path:'login',component:LoginComponent},
        {path:'services',component:ServicesComponent},
        {path:'rides',component:RidesComponent}

    ]},
        {path:'login',component:LoginComponent},
        {path:'dashboard',component:DashboardComponent},
       {path:'signup',component:SignupComponent},
       {path:'rides',component:RidesComponent}
       


]

export const routes:ModuleWithProviders=RouterModule.forRoot(router);



