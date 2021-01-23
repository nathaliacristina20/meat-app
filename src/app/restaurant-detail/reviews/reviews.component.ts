import { Review } from './review.model';
import { Observable } from 'rxjs';
import { RestaurantsService } from './../../restaurant/restaurant.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
})
export class ReviewsComponent implements OnInit {
  reviews!: Observable<Review[]>;

  constructor(
    private restaurantsService: RestaurantsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.reviews = this.restaurantsService.reviewsOfRestaurant(
      this.route.parent!.snapshot.params['id']
    );
  }

  setIcon(rating: number): string {
    if (rating >= 4) return `assets/img/reactions/loved.png`;
    else if (rating >= 3) return `assets/img/reactions/soso.png`;
    else return `assets/img/reactions/pissed.png`;
  }
}
