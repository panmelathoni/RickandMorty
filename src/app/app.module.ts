import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './view/home/home.component';
import { CharactersListComponent } from './view/characters-list/characters-list.component';
import { MoreInformationComponent } from './view/more-information/more-information.component';
import { DashboardComponent } from './view/dashboard/dashboard.component';
import { WelcomeComponent } from './view/welcome/welcome.component';
import { VideosComponent } from './view/videos/videos.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule}  from '@angular/material/snack-bar';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SearchFilterPipe } from './search-filter.pipe';


import { FlexLayoutModule } from '@angular/flex-layout'

import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { PersonagensService } from './personagens.service';
import { YoutubeService } from './youtube.service';







@NgModule({
  declarations: [AppComponent, HomeComponent, CharactersListComponent, SearchFilterPipe, MoreInformationComponent, DashboardComponent, WelcomeComponent, VideosComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatRadioModule,
    MatSelectModule,
    MatIconModule,
    MatMenuModule,
    NoopAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule
  
  ],
  providers: [PersonagensService, HttpClientModule, YoutubeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
