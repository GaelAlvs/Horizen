import { Component, inject, signal, computed, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../../core/services/product-service';
import { Catalog } from '../../components/catalog/catalog';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-shop',
  imports: [Catalog, TitleCasePipe],
  templateUrl: './shop.html',
  styleUrl: './shop.css',
})
export class Shop implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private productService = inject(ProductService);

  searchQuery = signal('');
  selectedCategory = signal('todos');
  selectedSort = signal('relevance');

  categories = this.productService.categories;

  filteredProducts = computed(() => {
    let products = this.productService.products();

    // Filtro por busca
    if (this.searchQuery()) {
      products = this.productService.search(this.searchQuery());
    }

    // Filtro por categoria
    if (this.selectedCategory() !== 'todos') {
      products = products.filter((p) => p.category === this.selectedCategory());
    }

    // Ordenação
    return this.productService.sortBy(products, this.selectedSort() as any);
  });

  ngOnInit() {
    this.route.queryParamMap.subscribe((params) => {
      this.searchQuery.set(params.get('q') ?? '');

      const cat = params.get('category');
      if (cat) this.selectedCategory.set(cat);
    });
  }

  selectCategory(cat: string) {
    this.selectedCategory.set(cat);
  }

  clearSearch() {
    this.searchQuery.set('');
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {},
      queryParamsHandling: '',
      replaceUrl: true,
    });
  }
}
