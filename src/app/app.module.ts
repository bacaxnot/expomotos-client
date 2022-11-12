import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RegisterFormComponent } from './components/register-form/register-form.component';
import { StandFormComponent } from './components/stand-form/stand-form.component';
import { StatsComponent } from './components/stats/stats.component';
import { DatapolicyComponent } from './components/datapolicy/datapolicy.component';
import { RegisterSuccessComponent } from './components/register-success/register-success.component'
import { LandingpComponent } from './components/landingp/landingp.component'
import { AcordeonComponent } from './components/acordeon/acordeon.component'
import { CarruselhomeComponent } from './components/carruselhome/carruselhome.component'
import { NavbarComponent } from './components/navbar/navbar.component'
import { DashboardComponent } from './components/dashboard/dashboard.component'

import { RegisterService } from './services/register.service';

@NgModule({
  declarations: [
    AppComponent,
    RegisterFormComponent,
    StandFormComponent,
    StatsComponent,
    DatapolicyComponent,
    RegisterSuccessComponent,
    LandingpComponent,
    AcordeonComponent,
    CarruselhomeComponent,
    NavbarComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    RegisterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
