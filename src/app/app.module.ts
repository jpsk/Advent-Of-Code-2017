import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatToolbarModule,
  MatExpansionModule,
  MatInputModule,
  MatButtonModule,
  MatTabsModule
} from '@angular/material';


import { AppComponent } from './app.component';
import { DailyPuzzleComponent } from './daily-puzzle/daily-puzzle.component';


@NgModule({
  declarations: [
    AppComponent,
    DailyPuzzleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatExpansionModule,
    MatInputModule,
    MatButtonModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
