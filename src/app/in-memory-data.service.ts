import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Product } from './product';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const products = [
      { id: 1, name: 'milk', amount: 5, price: 2.7 },
      { id: 2, name: 'bread', amount: 1, price: 4.5 },
      { id: 3, name: 'water', amount: 6, price: 1.8 },
      { id: 4, name: 'sugar', amount: 2, price: 5.0 },
      { id: 5, name: 'eggs', amount: 20, price: 7.5 },
      { id: 6, name: 'bananas', amount: 3, price: 4.3 },
      { id: 7, name: 'apples', amount: 5, price: 2.2 },
      { id: 8, name: 'oranges', amount:4 , price: 6.5 },
      { id: 9, name: 'salt', amount: 1, price: 4.0 },
      { id: 10, name: 'oil', amount: 1, price: 5.5 }
    ];
    return {products};
  }

  // Overrides the genId method to ensure that a product always has an id.
  // If the products array is empty,
  // the method below returns the initial number (11).
  // if the products array is not empty, the method below returns the highest
  // product id + 1.
  genId(products: Product[]): number {
    return products.length > 0 ? Math.max(...products.map(product => product.id)) + 1 : 11;
  }
}
