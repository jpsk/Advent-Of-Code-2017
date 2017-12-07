import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  disabled = true;
  input = new FormControl();
  sub = new Subscription();
  output;

  ngOnInit() {
    this.sub.add(this.input.valueChanges.subscribe(i => {
      if (!i) { this.output = undefined; }
      this.disabled = !i
    }));
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onSubmit() {
    this.output = this.input.value;
  }
}
