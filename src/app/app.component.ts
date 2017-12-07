import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

import { parseInput, parseInput2 } from './logic/day-1';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

enum PROBLEM {First, Second}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  activeProblem = new BehaviorSubject<PROBLEM>(PROBLEM.First);

  submitFn;

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

    this.sub.add(this.activeProblem.subscribe(problem => {
      switch (problem) {
        case PROBLEM.First:
          this.submitFn = parseInput;
          break;
        case PROBLEM.Second:
          this.submitFn = parseInput2;
          break;
      }
      this.output = undefined;
    }));
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onSubmit() {
    try {
      const out = this.submitFn(this.input.value);
      this.output = { valid: true, message: out };
    } catch (e) {
      this.output = { valid: false, message: <Error>e.message }
    }

  }
}
