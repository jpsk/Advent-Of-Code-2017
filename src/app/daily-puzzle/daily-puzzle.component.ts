import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { PROBLEM } from '../app.component';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  selector: 'app-daily-puzzle',
  templateUrl: './daily-puzzle.component.html',
  styleUrls: ['./daily-puzzle.component.scss']
})
export class DailyPuzzleComponent implements OnInit, OnDestroy {

  submitFn;

  disabled = true;
  input = new FormControl();
  sub = new Subscription();
  activeProblem = new BehaviorSubject<PROBLEM>(PROBLEM.First);


  output: { valid: boolean; message: any };

  @Input('dailyPuzzle') item;

  constructor() { }

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
          this.submitFn = this.item.problems[0].fn;
          break;
        case PROBLEM.Second:
          this.submitFn = this.item.problems[1].fn;
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
      console.log('Not caught');
    } catch (e) {
      this.output = { valid: false, message: <Error>e.message }
    }
  }

}
