import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardHomeComponent } from './components/dashboard/dashboard_home/dashboard-home/dashboard-home.component';
import { MytweetsComponent } from './components/dashboard/mytweets/mytweets/mytweets.component';
import { LoginComponent } from './components/login/login.component';
import { UsercomponentComponent } from './components/usercomponents/usercomponent/usercomponent.component';
import { AuthGuardGuard } from './guards/auth_guard/auth-guard.guard';
import { LoginguardGuard } from './guards/loginguard/loginguard.guard';
import { HomeComponentComponent } from './HomeComponent/home-component/home-component.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponentComponent,
    pathMatch:'full',
    
  },
  {
    path:'login',
    component:LoginComponent,
    pathMatch:'full',
    canActivate:[LoginguardGuard]
  },
  {
    path:'dashboard',
    component:DashboardComponent,
    children:[
      {
        path:'',
        component:DashboardHomeComponent

      },
        
      {
        path:'mytweets',
        component:MytweetsComponent
      },{
        path:'users',
        component:UsercomponentComponent
      }
    ],
    canActivate:[AuthGuardGuard]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
