import { Restaurant } from './restaurant.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html'
})
export class RestaurantComponent implements OnInit {

  @Input()
  restaurant!: Restaurant;

  constructor() {
  }

  ngOnInit(): void {
  }

}
