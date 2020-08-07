import { Component} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {
  product: Product;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) {
    this.product = new Product();
  }

  onSubmit() {
    this.productService.addProduct(this.product).subscribe(result => this.goToProductList());
  }

  goToProductList() {
    this.router.navigate(['/products'])
  }
}
