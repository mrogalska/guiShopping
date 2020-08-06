import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Product } from '../Product';
import { ProductService } from '../Product.service';

@Component({
  selector: 'app-Product-detail',
  templateUrl: './Product-detail.component.html',
  styleUrls: [ './Product-detail.component.css' ]
})
export class ProductDetailComponent implements OnInit {
  @Input() Product: Product;

  constructor(
    private route: ActivatedRoute,
    private ProductService: ProductService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.ProductService.getProduct(id)
      .subscribe(Product => this.Product = Product);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.ProductService.updateProduct(this.Product)
      .subscribe(() => this.goBack());
  }
}
