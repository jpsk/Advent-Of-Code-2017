import { Component, OnInit } from '@angular/core';
import { APP_CONFIG } from './config';

export enum PROBLEM {First, Second}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  public config;

  ngOnInit() {
    this.config = APP_CONFIG;
  }


}
