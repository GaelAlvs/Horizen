import { Component, inject, signal, computed } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductService, Product } from '../../../core/services/product-service';

@Component({
  selector: 'app-product',
  imports: [RouterLink],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class ProductPage {
  private route = inject(ActivatedRoute);
  productService = inject(ProductService);

  quantity = signal(1);

  product = computed<Product | undefined>(() => {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    return this.productService.getById(id);
  });

  relatedProducts = computed(() => {
    const current = this.product();
    if (!current) return [];
    return this.productService
      .getByCategory(current.category)
      .filter((p) => p.id !== current.id)
      .slice(0, 4);
  });

  increment() {
    const p = this.product();
    if (p && this.quantity() < p.stock) this.quantity.update((q) => q + 1);
  }

  decrement() {
    if (this.quantity() > 1) this.quantity.update((q) => q - 1);
  }

  addToCart() {
    const p = this.product();
    if (!p) return;
    // CartService será injetado aqui futuramente
    console.log('Adicionar ao carrinho:', p.name, 'x', this.quantity());
  }

  buyNow() {
    this.addToCart();
    // Navegar para /cart futuramente
  }

  getStars(rating: number): string[] {
    return Array.from({ length: 5 }, (_, i) => {
      if (i < Math.floor(rating)) return 'fa-solid fa-star text-yellow-400';
      if (i < rating) return 'fa-solid fa-star-half-stroke text-yellow-400';
      return 'fa-regular fa-star text-yellow-400';
    });
  }
}
