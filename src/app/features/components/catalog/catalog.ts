import { Component, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductService, Product } from '../../../core/services/product-service';
import { CartService } from '../../../core/services/cart-service';

@Component({
  selector: 'app-catalog',
  imports: [RouterLink],
  templateUrl: './catalog.html',
  styleUrl: './catalog.css',
})
export class Catalog {
  productService = inject(ProductService);
  private cartService = inject(CartService);

  products = input<Product[]>(this.productService.products());

  addToCart(product: Product) {
    this.cartService.addItem(product);
  }

  getStars(rating: number): string[] {
    return Array.from({ length: 5 }, (_, i) => {
      if (i < Math.floor(rating)) return 'fa-solid fa-star text-yellow-400';
      if (i < rating) return 'fa-solid fa-star-half-stroke text-yellow-400';
      return 'fa-regular fa-star text-yellow-400';
    });
  }
}
