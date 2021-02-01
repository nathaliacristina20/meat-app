import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css'],
})
export class RatingComponent implements OnInit {
  @Output() rated = new EventEmitter<number>();

  rates: number[] = [1, 2, 3, 4, 5];
  rate = 0;

  previousRate: number | undefined;

  constructor() {}

  ngOnInit(): void {
    console.log('rate', this.rate);
  }

  setRate(rate: number) {
    this.rate = rate;
    this.previousRate = undefined;
    this.rated.emit(this.rate);
  }

  setTemporaryRate(r: number) {
    if (this.previousRate === undefined) {
      this.previousRate = this.rate;
    }
    this.rate = r;
  }

  clearTemporaryRate() {
    if (this.previousRate !== undefined) {
      this.rate = this.previousRate;
      this.previousRate = undefined;
    }
  }
}
