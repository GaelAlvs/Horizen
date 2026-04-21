import { Component, inject } from '@angular/core';
import { Catalog } from '../../components/catalog/catalog';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [Catalog],
  templateUrl: './shop.html',
  styleUrl: './shop.css',
})
export class Shop {
  searchTerm = '';

  private route = inject(ActivatedRoute);

  ngOnInit() {
    const q = this.route.snapshot.queryParamMap.get('q');
    if (q) {
      this.searchTerm = q;
    }
  }
}
