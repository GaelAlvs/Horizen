import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private items = signal<any[]>([]);

  totalItems() {
    return this.items().length;
  }

  addItem(item: any) {
    this.items.update((items) => [...items, item]);
  }
}
