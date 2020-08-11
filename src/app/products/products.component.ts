import { Component, OnInit } from '@angular/core';

import { Product } from '../product';
import { ProductService } from '../product.service';
import {MatTableModule, MatTableDataSource} from '@angular/material/table'; 
import { SelectionModel } from '@angular/cdk/collections';
// import { runInThisContext } from 'vm';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  displayedColumns: string[] = ['name', 'amount', 'price', 'id'];
  products: Product[];
  showOptions: number = 0;



  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    })
  }

  delete(product: Product): void {
    this.products = this.products.filter(h => h !== product);
    this.productService.deleteProduct(product).subscribe();
  }

  getTotalCost(t: Product): number {
    return this.products.map(t => t.price).reduce((acc, value) => acc + value, 0);
  }

  getTotalAmount(t: Product): number {
    return this.products.map(t => t.amount).reduce((acc, value) => acc + value, 0);
  }

}

