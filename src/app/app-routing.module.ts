import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterFormComponent } from './components/register-form/register-form.component';
import { StandFormComponent } from './components/stand-form/stand-form.component';
import { RegisterSuccessComponent } from './components/register-success/register-success.component';
import { LandingpComponent } from './components/landingp/landingp.component';
import { DatapolicyComponent } from './components/datapolicy/datapolicy.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  {
    path:"",
    component: LandingpComponent
  },
  {
    path:"register",
    component: RegisterFormComponent
  },
  {
    path:"register/:stand/:imgName",
    component: StandFormComponent
  },
  {
    path:"success/:idNumber",
    component: RegisterSuccessComponent
  },
  {
    path:"success/:idNumber/:stand",
    component: RegisterSuccessComponent
  },
  {
    path:"success/:idNumber/:stand/:final",
    component: RegisterSuccessComponent
  },
  {
    path:"datapolicy",
    component: DatapolicyComponent
  },
  {
    path:"kjdsifun/S5s2WEdj/admn/nf2256ea",
    component: DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
