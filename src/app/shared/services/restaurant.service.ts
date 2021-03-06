import { Review } from './../../restaurant-detail/reviews/review.model';
import { MenuItem } from './../../restaurant-detail/menu-item/menu-item.model';
import { ErrorHandler } from './../error-handler';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Restaurant } from 'src/app/restaurant/restaurant.model';

@Injectable()
export class RestaurantsService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Restaurant[]> {
    return this.http
      .get<Restaurant[]>(`http://localhost:3000/restaurants`)
      .pipe(catchError(ErrorHandler.handleError));
  }

  getById(id: string): Observable<Restaurant> {
    return this.http
      .get<Restaurant>(`http://localhost:3000/restaurants/${id}`)
      .pipe(catchError(ErrorHandler.handleError));
  }

  reviewsOfRestaurant(id: string): Observable<Review[]>  {
    return this.http
      .get<Review[]>(`http://localhost:3000/restaurants/${id}/reviews`)
      .pipe(catchError(ErrorHandler.handleError));
  }

  menuOfRestaurant(id: string): Observable<MenuItem[]>  {
    return this.http
      .get<MenuItem[]>(`http://localhost:3000/restaurants/${id}/menu`)
      .pipe(catchError(ErrorHandler.handleError));
  }
}
