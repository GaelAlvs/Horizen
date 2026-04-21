import { Component, inject, signal, computed, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../../core/services/product-service';
import { Catalog } from '../../components/catalog/catalog';

@Component({
  selector: 'app-shop',
  imports: [Catalog],
  templateUrl: './shop.html',
  styleUrl: './shop.css',
})
export class Shop implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private productService = inject(ProductService);

  searchQuery = signal('');

  filteredProducts = computed(() => {
    const q = this.searchQuery();
    return q ? this.productService.search(q) : this.productService.products();
  });

  ngOnInit() {
    this.route.queryParamMap.subscribe((params) => {
      this.searchQuery.set(params.get('q') ?? '');
    });
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
