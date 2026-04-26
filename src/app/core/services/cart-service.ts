import { Injectable, signal, computed, effect } from '@angular/core';
import { Product } from './product-service';

export interface CartItem {
  product: Product;
  quantity: number;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private _items = signal<CartItem[]>(this.loadFromStorage());

  readonly items = this._items.asReadonly();

  readonly totalItems = computed(() => this._items().reduce((sum, item) => sum + item.quantity, 0));

  readonly totalPrice = computed(() =>
    this._items().reduce((sum, item) => sum + item.product.price * item.quantity, 0),
  );

  constructor() {
    // Salva no localStorage sempre que o carrinho mudar
    effect(() => {
      localStorage.setItem('horizen_cart', JSON.stringify(this._items()));
    });
  }

  private loadFromStorage(): CartItem[] {
    try {
      const data = localStorage.getItem('horizen_cart');
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  }

  getQuantity(productId: number): number {
    return this._items().find((i) => i.product.id === productId)?.quantity ?? 0;
  }

  isInCart(productId: number): boolean {
    return this._items().some((i) => i.product.id === productId);
  }

  addItem(product: Product, quantity = 1) {
    this._items.update((items) => {
      const existing = items.find((i) => i.product.id === product.id);
      if (existing) {
        return items.map((i) =>
          i.product.id === product.id
            ? { ...i, quantity: Math.min(i.quantity + quantity, product.stock) }
            : i,
        );
      }
      return [...items, { product, quantity }];
    });
  }

  removeItem(productId: number) {
    this._items.update((items) => items.filter((i) => i.product.id !== productId));
  }

  updateQuantity(productId: number, quantity: number) {
    if (quantity <= 0) {
      this.removeItem(productId);
      return;
    }
    this._items.update((items) =>
      items.map((i) =>
        i.product.id === productId ? { ...i, quantity: Math.min(quantity, i.product.stock) } : i,
      ),
    );
  }

  clear() {
    this._items.set([]);
  }

  formatPrice(value: number): string {
    return value.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }
}
