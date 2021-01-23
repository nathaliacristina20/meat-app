import { RestaurantsService } from './../restaurant/restaurant.service';
import { Restaurant } from './../restaurant/restaurant.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html'
})
export class RestaurantsComponent implements OnInit {

  public loading = true;
  public restaurants: Restaurant[] = [];

  constructor(private restaurantService: RestaurantsService) {}

  ngOnInit(): void {
    this.restaurantService.getAll().subscribe(
      (response) => {
        this.restaurants = response;
        this.loading = false;
      },
      () => (this.loading = false)
    );
  }
}
