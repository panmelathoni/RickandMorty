import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './view/home/home.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import { FormsModule } from '@angular/forms';

import { SearchFilterPipe } from './search-filter.pipe';


import { FlexLayoutModule } from '@angular/flex-layout'

import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { PersonagensService } from './personagens.service';
import { CharactersListComponent } from './view/characters-list/characters-list.component';


@NgModule({
  declarations: [AppComponent, HomeComponent, CharactersListComponent, SearchFilterPipe],
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
    NoopAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    FormsModule
  ],
  providers: [PersonagensService, HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
