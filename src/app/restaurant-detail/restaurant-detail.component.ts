import { RestaurantsService } from './../shared/services/restaurant.service';

import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../restaurant/restaurant.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html'
})
export class RestaurantDetailComponent implements OnInit {
  restaurant!: Restaurant;

  constructor(
    private restaurantsService: RestaurantsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.restaurantsService
      .getById(this.route.snapshot.params.id)
      .subscribe((restaurant) => (this.restaurant = restaurant));
  }
}
