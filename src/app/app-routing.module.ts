import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';

import { TestComponent } from './test/test.component';

const routes: Routes = [
  {path:'dashboard',component:DashboardComponent,children:[
    {path:'test',outlet:'dashboardcontent',component:TestComponent},
    
  ]},
 
  {path:'test',component:TestComponent},
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
