import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  banners = [
    {
      title: 'Descontos em Video Games',
      subtitle: 'Descontos para passar de fase',
      color: 'bg-orange-500',
      image: 'https://cdn-icons-png.flaticon.com/512/871/871392.png',
    },
    {
      title: 'Eletrônicos',
      subtitle: 'Até 30% OFF',
      color: 'bg-blue-500',
      image: 'https://cdn-icons-png.flaticon.com/512/1041/1041916.png',
    },
  ];

  products = [
    { name: 'Produto 1', image: 'https://cdn-icons-png.flaticon.com/512/1041/1041916.png' },
    { name: 'Produto 2', image: 'https://cdn-icons-png.flaticon.com/512/871/871392.png' },
    { name: 'Produto 3', image: 'https://cdn-icons-png.flaticon.com/512/2933/2933245.png' },
  ];

  categories = [
    { name: 'Futebol', color: 'bg-green-200' },
    { name: 'Ofertas', color: 'bg-yellow-200' },
    { name: 'Tech', color: 'bg-blue-200' },
    { name: 'Casa', color: 'bg-red-200' },
  ];
}
