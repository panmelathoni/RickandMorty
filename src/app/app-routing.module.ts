import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './view/dashboard/dashboard.component';
import { HomeComponent } from './view/home/home.component';
import { MoreInformationComponent } from './view/more-information/more-information.component';
import { WelcomeComponent } from './view/welcome/welcome.component';

const routes: Routes = [
  { path: '', component: DashboardComponent},
  { path: 'moreInfo/:id', component: MoreInformationComponent}, //com uso do id eu digo pra rota que ela vai receber um parametro id
  { path: 'welcome', component: WelcomeComponent},
  { path: 'home', component: HomeComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
