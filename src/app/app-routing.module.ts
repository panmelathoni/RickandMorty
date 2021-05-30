import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './view/dashboard/dashboard.component';
import { HomeComponent } from './view/home/home.component';
import { MoreInformationComponent } from './view/more-information/more-information.component';

const routes: Routes = [
  { path: '', component: DashboardComponent},
  { path: 'moreInfo', component: MoreInformationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
