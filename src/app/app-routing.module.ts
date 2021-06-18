import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './view/dashboard/dashboard.component';

import { MoreInformationComponent } from './view/more-information/more-information.component';
import { VideosComponent } from './view/videos/videos.component';
import { WelcomeComponent } from './view/welcome/welcome.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent},
  { path: 'moreInfo/:id', component: MoreInformationComponent}, 
  { path: 'searchCharacters', component: DashboardComponent},
  { path: 'videos', component: VideosComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
