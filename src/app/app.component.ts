import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

import { parseInput } from './logic/day-1';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  disabled = true;
  input = new FormControl();
  sub = new Subscription();
  output: { valid: boolean; message: any };

  ngOnInit() {
    this.sub.add(this.input.valueChanges.subscribe(i => {
      if (!i) {
        this.output = undefined;
      }
      this.disabled = !i
    }));
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onSubmit() {
    try {
      const out = parseInput(this.input.value);
      this.output = { valid: true, message: out };
    } catch (e) {
      this.output = { valid: false, message: <Error>e.message }
    }

  }


}
