import { RestaurantsService } from './../../shared/services/restaurant.service';
import { Observable } from 'rxjs';
import { MenuItem } from './../menu-item/menu-item.model';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent implements OnInit {
  menuItems!: Observable<MenuItem[]>;

  constructor(
    private restaurantsService: RestaurantsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.menuItems = this.restaurantsService.menuOfRestaurant(
      this.route.parent?.snapshot.params.id
    );
  }
}
