import { Injectable, signal, computed } from '@angular/core';
import { Product } from './product-service';

export interface CartItem {
  product: Product;
  quantity: number;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private _items = signal<CartItem[]>([]);

  // Expõe o array readonly para os componentes
  readonly items = this._items.asReadonly();

  // Total de itens (para o badge do header)
  readonly totalItems = computed(() => this._items().reduce((sum, item) => sum + item.quantity, 0));

  // Valor total do carrinho
  readonly totalPrice = computed(() =>
    this._items().reduce((sum, item) => sum + item.product.price * item.quantity, 0),
  );

  // Quantidade de um produto específico no carrinho
  getQuantity(productId: number): number {
    return this._items().find((i) => i.product.id === productId)?.quantity ?? 0;
  }

  // Verifica se um produto já está no carrinho
  isInCart(productId: number): boolean {
    return this._items().some((i) => i.product.id === productId);
  }

  addItem(product: Product, quantity = 1) {
    this._items.update((items) => {
      const existing = items.find((i) => i.product.id === product.id);

      if (existing) {
        // Se já existe, soma a quantidade respeitando o estoque
        return items.map((i) =>
          i.product.id === product.id
            ? { ...i, quantity: Math.min(i.quantity + quantity, product.stock) }
            : i,
        );
      }

      // Se não existe, adiciona novo item
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
