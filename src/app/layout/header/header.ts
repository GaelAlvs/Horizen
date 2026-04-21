import { Component, signal, computed, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { CartService } from '../../core/services/cart-service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  searchTerm = '';
  menuOpen = signal(false);

  private router = inject(Router);
  private cartService = inject(CartService);

  cartCount = computed(() => this.cartService.totalItems());

  onSearch() {
    const value = this.searchTerm.trim();
    if (value) {
      this.router.navigate(['/shop'], {
        queryParams: { q: value },
      });
    }
  }

  openMenu() {
    this.menuOpen.set(true);
  }

  closeMenu() {
    this.menuOpen.set(false);
  }

  openCart() {
    this.router.navigate(['/cart']);
  }
}
