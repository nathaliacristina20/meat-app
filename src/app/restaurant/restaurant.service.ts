import { ErrorHandler } from './../error-handler';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Restaurant } from './restaurant.model';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';

@Injectable()
export class RestaurantsService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Restaurant[]> {
    return this.http
      .get<Restaurant[]>(`http://localhost:3000/restaurants`)
      .pipe(catchError(ErrorHandler.handleError));
  }
}
