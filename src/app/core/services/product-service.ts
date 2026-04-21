import { Injectable, signal, computed } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  marca: string;
  price: number;
  priceFormatted: string;
  image: string;
  category: string;
  rating: number;
  reviewCount: number;
  stock: number;
  discount?: number;
  description?: string;
  installments?: { count: number; value: number };
}

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly _products = signal<Product[]>([
    {
      id: 1,
      name: 'Videogame PlayStation®5 Slim Digital 1TB',
      marca: 'PlayStation',
      price: 3560.9,
      priceFormatted: '3.560,90',
      image:
        'https://png.pngtree.com/png-vector/20250212/ourmid/pngtree-ps-5-or-playstation-controller-joystick-png-image_15443900.png',
      category: 'videogames',
      rating: 4.8,
      reviewCount: 2341,
      stock: 15,
      installments: { count: 12, value: 296.74 },
      description:
        'Console PlayStation®5 Slim Digital Edition com 1TB de armazenamento. Experiência de jogo de última geração com SSD ultrarrápido.',
    },
    {
      id: 2,
      name: 'Controle Sony DualSense PS5, Sem Fio, Branco',
      marca: 'PlayStation',
      price: 429.9,
      priceFormatted: '429,90',
      image:
        'https://png.pngtree.com/png-vector/20241205/ourmid/pngtree-playstation-5-controller-joystick-png-image_14639420.png',
      category: 'acessorios',
      rating: 4.7,
      reviewCount: 985,
      stock: 42,
      installments: { count: 6, value: 71.65 },
      description:
        'Controle DualSense sem fio com feedback háptico e gatilhos adaptáveis. Compatível com PS5.',
    },
    {
      id: 3,
      name: 'Sony Headset Pulse 3D Wireless para PlayStation 5',
      marca: 'PlayStation',
      price: 920.4,
      priceFormatted: '920,40',
      image:
        'https://store.sony.com.au/dw/image/v2/ABBC_PRD/on/demandware.static/-/Sites-sony-master-catalog/default/dwc903d3fe/images/PS5ELITEWIRELESSHS/PS5ELITEWIRELESSHS.png?sw=442&sh=442&sm=fit',
      category: 'acessorios',
      rating: 4.6,
      reviewCount: 412,
      stock: 28,
      installments: { count: 10, value: 92.04 },
      description:
        'Headset sem fio com áudio 3D Tempest. Microfones com cancelamento de ruído e bateria de longa duração.',
    },
    {
      id: 4,
      name: 'Borderlands 4 - PlayStation 5 Mídia Física',
      marca: '2K Games',
      price: 158.9,
      priceFormatted: '158,90',
      image:
        'https://cdn.awsli.com.br/800x800/241/241991/produto/366960972/borderlands-5lcwtz6daa.png',
      category: 'jogos',
      rating: 4.5,
      reviewCount: 203,
      stock: 67,
      discount: 10,
      installments: { count: 3, value: 52.97 },
      description:
        'Borderlands 4 traz um novo planeta e horda de inimigos. Jogue solo ou cooperativo com até 4 jogadores.',
    },
    {
      id: 5,
      name: 'Elden Ring - Shadow of the Erdtree PlayStation 5',
      marca: 'Bandai Namco',
      price: 214.9,
      priceFormatted: '214,90',
      image:
        'https://toyorgame.com.sg/cdn/shop/files/PS5EldenRingShadowoftheErdtree.png?v=1712804023',
      category: 'jogos',
      rating: 4.9,
      reviewCount: 1872,
      stock: 33,
      installments: { count: 4, value: 53.72 },
      description:
        'Expansão de Elden Ring com novas regiões, bosses e equipamentos. Requer o jogo base para jogar.',
    },
    {
      id: 6,
      name: 'Laptop Gamer',
      marca: 'Genérico',
      price: 4299.0,
      priceFormatted: '4.299,00',
      image:
        'https://png.pngtree.com/png-vector/20250304/ourmid/pngtree-sleek-modern-laptop-with-high-resolution-display-png-image_15711292.png',
      category: 'tecnologia',
      rating: 4.4,
      reviewCount: 558,
      stock: 10,
      installments: { count: 12, value: 358.25 },
      description: 'Laptop com alta performance para jogos e trabalho.',
    },
    {
      id: 7,
      name: 'Mouse Gamer RGB',
      marca: 'Genérico',
      price: 189.9,
      priceFormatted: '189,90',
      image:
        'https://png.pngtree.com/png-vector/20240124/ourmid/pngtree-mouse-click-png-free-download-png-image_11485082.png',
      category: 'tecnologia',
      rating: 4.3,
      reviewCount: 320,
      stock: 90,
      discount: 15,
      installments: { count: 3, value: 63.3 },
      description: 'Mouse gamer com iluminação RGB e sensor de alta precisão.',
    },
    {
      id: 8,
      name: 'Alexa Echo Dot 5ª Geração',
      marca: 'Amazon',
      price: 349.0,
      priceFormatted: '349,00',
      image: 'https://www.pngarts.com/files/8/Alexa-Echo-PNG-Photo.png',
      category: 'tecnologia',
      rating: 4.6,
      reviewCount: 4102,
      stock: 55,
      installments: { count: 6, value: 58.17 },
      description: 'Smart speaker com Alexa. Controle sua casa inteligente por voz.',
    },
  ]);

  readonly products = this._products.asReadonly();

  readonly categories = computed(() => {
    const cats = this._products().map((p) => p.category);
    return ['todos', ...Array.from(new Set(cats))];
  });

  getById(id: number): Product | undefined {
    return this._products().find((p) => p.id === id);
  }

  getByCategory(category: string): Product[] {
    if (category === 'todos') return this._products();
    return this._products().filter((p) => p.category === category);
  }

  search(query: string): Product[] {
    const q = query.toLowerCase().trim();
    if (!q) return this._products();
    return this._products().filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.marca.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q),
    );
  }

  sortBy(
    products: Product[],
    criteria: 'price-asc' | 'price-desc' | 'rating' | 'relevance',
  ): Product[] {
    const list = [...products];
    switch (criteria) {
      case 'price-asc':
        return list.sort((a, b) => a.price - b.price);
      case 'price-desc':
        return list.sort((a, b) => b.price - a.price);
      case 'rating':
        return list.sort((a, b) => b.rating - a.rating);
      default:
        return list;
    }
  }

  getPriceWithDiscount(product: Product): number {
    if (!product.discount) return product.price;
    return product.price * (1 - product.discount / 100);
  }

  formatPrice(value: number): string {
    return value.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }
}
