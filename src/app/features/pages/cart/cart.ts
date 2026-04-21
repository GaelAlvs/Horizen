import { Component, inject } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { CartService } from '../../../core/services/cart-service';

@Component({
  selector: 'app-cart',
  imports: [RouterLink],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class CartPage {
  cartService = inject(CartService);
  private router = inject(Router);

  checkout() {
    this.router.navigate(['/checkout']);
  }
}
