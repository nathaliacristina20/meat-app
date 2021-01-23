import { Restaurant } from './restaurant.model';
export class RestaurantsService {
  constructor() {}

  restaurants: Restaurant[] = [
    {
      category: 'Burguer house',
      deliveryEstimate: '25m',
      id: '1',
      imagePath: '../../assets/img/restaurants/tasty.png',
      name: 'Hamburguer',
      rating: 4,
    },
    {
      category: 'Burguer house',
      deliveryEstimate: '25m',
      id: '1',
      imagePath: '../../assets/img/restaurants/tasty.png',
      name: 'Hamburguer',
      rating: 4,
    },
  ];

  getAll(): Restaurant[] {
    return this.restaurants;
  }
}
