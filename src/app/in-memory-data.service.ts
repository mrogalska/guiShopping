import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Product } from './product';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const products = [
      { id: 1, name: 'milk', amount: 2, price: 6.8 },
      { id: 2, name: 'water', amount: 23, price: 3.8 },
      { id: 3, name: 'butter', amount: 6, price: 4.9 },
      { id: 4, name: 'apple', amount: 19, price: 0.7 },
      { id: 5, name: 'banana', amount: 3, price: 4.0 },
      { id: 6, name: 'sugar', amount: 5, price: 1.7 },
      { id: 7, name: 'bread', amount: 1, price: 9.2 },
      { id: 8, name: 'oil', amount: 3, price: 5.6 },
      { id: 9, name: 'strawberries', amount: 5, price: 7.5 },
      { id: 10, name: 'salt', amount: 4, price: 2.3 }
    ];
    return {products};
  }

  // Overrides the genId method to ensure that a product always has an id.
  // If the products array is empty,
  // the method below returns the initial number (11).
  // if the products array is not empty, the method below returns the highest
  // product id + 1.
  genId(products: Product[]): number {
    return products.length > 0 ? Math.max(...products.map(product => product.id)) + 1 : 1;
  }
}
