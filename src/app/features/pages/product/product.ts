import { Component, inject, signal, computed } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ProductService, Product } from '../../../core/services/product-service';
import { CartService } from '../../../core/services/cart-service';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

@Component({
  selector: 'app-product',
  imports: [RouterLink],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class ProductPage {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  productService = inject(ProductService);
  private cartService = inject(CartService);

  quantity = signal(1);

  // Lê o id reativo — atualiza quando a rota muda sem recriar o componente
  private productId = toSignal(this.route.paramMap.pipe(map((params) => Number(params.get('id')))));

  product = computed<Product | undefined>(() => {
    return this.productService.getById(this.productId() ?? 0);
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
    this.cartService.addItem(p, this.quantity());
  }

  buyNow() {
    this.addToCart();
    this.router.navigate(['/cart']);
  }

  getStars(rating: number): string[] {
    return Array.from({ length: 5 }, (_, i) => {
      if (i < Math.floor(rating)) return 'fa-solid fa-star text-yellow-400';
      if (i < rating) return 'fa-solid fa-star-half-stroke text-yellow-400';
      return 'fa-regular fa-star text-yellow-400';
    });
  }
}
