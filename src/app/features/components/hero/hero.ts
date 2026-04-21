import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../../core/services/product-service';

@Component({
  selector: 'app-hero',
  imports: [CommonModule, RouterLink],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  productService = inject(ProductService);

  // Produtos do serviço central
  offers = this.productService.products;
  recommendations = this.productService.products;

  banners = [
    {
      title: 'Descontos em Video Games',
      subtitle: 'Descontos para passar de fase',
      color: 'bg-orange-500',
      image:
        'https://png.pngtree.com/png-vector/20240930/ourmid/pngtree-retro-neon-video-game-controller-png-image_13929194.png',
      route: '/shop',
    },
    {
      title: 'Fones de Ouvido com Desconto',
      subtitle: 'Até 30% OFF',
      color: 'bg-blue-500',
      image:
        'https://static.vecteezy.com/system/resources/thumbnails/036/731/848/small/ai-generated-earphone-isolated-on-transparent-background-free-png.png',
      route: '/shop',
    },
    {
      title: 'Desenvolvimento Pessoal',
      subtitle: 'Livros para enriquecer sua mente',
      color: 'bg-red-500',
      image: 'https://aceleraexport.com/wp-content/uploads/2020/08/Pai-Rico-Pai-Pobre.png',
      route: '/shop',
    },
    {
      title: 'Suplementos para Atletas',
      subtitle: 'Melhore seu desempenho até 10% OFF',
      color: 'bg-yellow-500',
      image:
        'https://www.madrugaosuplementos.com.br/wp-content/uploads/2025/07/15348995605-b2732047d315d5508c4e0140efe6e501.png',
      route: '/shop',
    },
    {
      title: 'Móveis para sua casa',
      subtitle: 'Transforme seu espaço',
      color: 'bg-purple-500',
      image:
        'https://static.vecteezy.com/system/resources/thumbnails/022/972/872/small/modern-sofa-isolated-png.png',
      route: '/shop',
    },
  ];

  categories = [
    {
      name: 'Futebol',
      color: 'bg-green-200',
      image: 'https://www.pngarts.com/files/2/Soccer-Ball-PNG-Photo.png',
      route: '/shop',
    },
    {
      name: 'Ofertas',
      color: 'bg-yellow-200',
      image: 'https://cdn-icons-png.flaticon.com/512/1043/1043429.png',
      route: '/shop',
    },
    {
      name: 'Tech',
      color: 'bg-blue-200',
      image:
        'https://static.vecteezy.com/system/resources/previews/009/887/131/non_2x/computer-monitor-free-png.png',
      route: '/shop',
    },
    {
      name: 'Casa',
      color: 'bg-purple-200',
      image:
        'https://png.pngtree.com/png-vector/20240911/ourmid/pngtree-house-icon-png-image_13816347.png',
      route: '/shop',
    },
    {
      name: 'Moda',
      color: 'bg-red-200',
      image:
        'https://static.vecteezy.com/system/resources/thumbnails/052/648/148/small/black-long-sleeve-button-up-shirt-png.png',
      route: '/shop',
    },
    {
      name: 'Eletrônicos',
      color: 'bg-cyan-200',
      image: 'https://cdn-icons-png.flaticon.com/512/6461/6461888.png',
      route: '/shop',
    },
  ];
}
