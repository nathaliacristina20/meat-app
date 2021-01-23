import { RestaurantsService } from './../restaurant/restaurant.service';
import { Restaurant } from './../restaurant/restaurant.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css'],
})
export class RestaurantsComponent implements OnInit {
  public restaurants: Restaurant[] = [];

  constructor(private restaurantService: RestaurantsService) {}

  ngOnInit(): void {
    this.restaurantService
      .getAll()
      .subscribe((response) => (this.restaurants = response));
  }
}
