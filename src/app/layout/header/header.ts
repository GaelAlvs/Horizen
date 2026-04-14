import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  searchTerm: string = '';
  cartCount: number = 2; // depois virá de um serviço

  onSearch() {
    console.log('Buscando:', this.searchTerm);
    // futuramente: redirecionar para página de busca
  }

  openMenu() {
    console.log('Abrir menu lateral');
  }

  openCart() {
    console.log('Abrir carrinho');
  }
}
