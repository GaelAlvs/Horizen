import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  imports: [CommonModule, RouterLink],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  banners = [
    {
      title: 'Descontos em Video Games',
      subtitle: 'Descontos para passar de fase',
      color: 'bg-orange-500',
      image:
        'https://png.pngtree.com/png-vector/20240930/ourmid/pngtree-retro-neon-video-game-controller-png-image_13929194.png',
    },
    {
      title: 'Fones de Ouvido com Desconto',
      subtitle: 'Até 30% OFF',
      color: 'bg-blue-500',
      image:
        'https://static.vecteezy.com/system/resources/thumbnails/036/731/848/small/ai-generated-earphone-isolated-on-transparent-background-free-png.png',
    },
    {
      title: 'Desenvolvimento pessoal',
      subtitle: 'Livros para enriquecer sua mente',
      color: 'bg-red-500',
      image: 'https://aceleraexport.com/wp-content/uploads/2020/08/Pai-Rico-Pai-Pobre.png',
    },
    {
      title: 'Suplementos para Atletas',
      subtitle: 'Melhore seu desempenho até 10% OFF',
      color: 'bg-yellow-500',
      image:
        'https://www.madrugaosuplementos.com.br/wp-content/uploads/2025/07/15348995605-b2732047d315d5508c4e0140efe6e501.png',
    },
    {
      title: 'Móveis para sua casa',
      subtitle: 'Transforme seu espaço',
      color: 'bg-purple-500',
      image:
        'https://static.vecteezy.com/system/resources/thumbnails/022/972/872/small/modern-sofa-isolated-png.png',
    },
  ];

  products = [
    {
      name: 'Laptop',
      image:
        'https://png.pngtree.com/png-vector/20250304/ourmid/pngtree-sleek-modern-laptop-with-high-resolution-display-png-image_15711292.png',
    },
    {
      name: 'Mouse',
      image:
        'https://png.pngtree.com/png-vector/20240124/ourmid/pngtree-mouse-click-png-free-download-png-image_11485082.png',
    },
    {
      name: 'Luminária',
      image:
        'https://png.pngtree.com/png-clipart/20241003/original/pngtree-modern-ceiling-hanging-lamp-png-image_16168725.png',
    },
    {
      name: 'Alexa Echo',
      image: 'https://www.pngarts.com/files/8/Alexa-Echo-PNG-Photo.png',
    },
  ];

  categories = [
    {
      name: 'Futebol',
      color: 'bg-green-200',
      image: 'https://www.pngarts.com/files/2/Soccer-Ball-PNG-Photo.png',
    },
    {
      name: 'Ofertas',
      color: 'bg-yellow-200',
      image: 'https://cdn-icons-png.flaticon.com/512/1043/1043429.png',
    },
    {
      name: 'Tech',
      color: 'bg-blue-200',
      image:
        'https://static.vecteezy.com/system/resources/previews/009/887/131/non_2x/computer-monitor-free-png.png',
    },
    {
      name: 'Casa',
      color: 'bg-purple-200',
      image:
        'https://png.pngtree.com/png-vector/20240911/ourmid/pngtree-house-icon-png-image_13816347.png',
    },
    {
      name: 'Moda',
      color: 'bg-red-200',
      image:
        'https://static.vecteezy.com/system/resources/thumbnails/052/648/148/small/black-long-sleeve-button-up-shirt-png.png',
    },
    {
      name: 'Eletrônicos',
      color: 'bg-cyan-200',
      image: 'https://cdn-icons-png.flaticon.com/512/6461/6461888.png',
    },
  ];

  recommendations = [
    {
      name: 'Camisa Torcedor Corinthians',
      image:
        'https://images.tcdn.com.br/img/img_prod/934235/camisa_corinthians_i_2022_2023_nike_branca_6823_1_27aef4c4c63a9e6372254160b89546ff.jpg',
    },
    {
      name: 'Camisa Torcedor Palmeiras',
      image: 'https://www.mundodofutebol.com.br/lojas/00057707/prod/PALMEIRASI2025INFA1.png',
    },
    {
      name: 'Camisa Torcedor São Paulo',
      image:
        'https://static.polissport.com.br/public/polissport/imagens/produtos/camisa-braziline-sao-paulo-classmate-64ef425c051b0.png',
    },
    {
      name: 'Camisa Torcedor Santos',
      image:
        'https://lojaskoyote.com.br/cdn/shop/files/image-removebg-preview-2023-02-24T195757.402_500x.png?v=1738604977',
    },
  ];
}
