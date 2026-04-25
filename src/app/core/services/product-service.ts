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
  // Simulated product data
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
      marca: 'Asus',
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
      marca: 'Asus',
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
    {
      id: 9,
      name: 'AirPods Pro',
      marca: 'Apple',
      price: 1299.0,
      priceFormatted: '1.299,00',
      image:
        'https://png.pngtree.com/png-vector/20231104/ourmid/pngtree-apple-airpods-pro-png-image_10477533.png',
      category: 'tecnologia',
      rating: 4.7,
      reviewCount: 2500,
      stock: 25,
      installments: { count: 12, value: 108.25 },
      description: 'Fones de ouvido sem fio com cancelamento de ruído ativo e modo ambiente.',
    },
    {
      id: 10,
      name: 'Google buds Pro',
      marca: 'Google',
      price: 989.0,
      priceFormatted: '989,00',
      image:
        'https://t.ctcdn.com.br/2GGAQ7Xek1DG1HcD6lr14Re4vf8=/fit-in/400x400/filters:fill(transparent):watermark(wm/prd.png,-32p,center,1,none,15)/i927659.png',
      category: 'tecnologia',
      rating: 4.5,
      reviewCount: 1823,
      stock: 40,
      installments: { count: 15, value: 66.0 },
      description:
        'Fones de ouvido sem fio com cancelamento de ruído e integração com Google Assistant.',
    },
    {
      id: 11,
      name: 'Samsung Galaxy Buds Pro',
      marca: 'Samsung',
      price: 1067.0,
      priceFormatted: '1.067,00',
      image:
        'https://benchpromos.com.br/_next/image?url=https%3A%2F%2Fi.ibb.co%2FqYHQJ4Kt%2F1757331289-1757331289.png&w=3840&q=75',
      category: 'tecnologia',
      rating: 4.8,
      reviewCount: 2316,
      stock: 34,
      installments: { count: 8, value: 20.88 },
      description: 'Fones de ouvido sem fio com cancelamento de ruído e resistência à água IPX7.',
    },
    {
      id: 12,
      name: 'Camisa de time oficial Corinthians',
      marca: 'Nike',
      price: 168.0,
      priceFormatted: '168,00',
      image: 'https://www.mundodofutebol.com.br/lojas/00057707/prod/camisatimao2025.png',
      category: 'moda',
      rating: 4.4,
      reviewCount: 2316,
      stock: 34,
      installments: { count: 8, value: 20.88 },
      description: 'Camisa de time oficial Corinthians.',
    },
    {
      id: 13,
      name: 'Camisa de time oficial Palmeiras',
      marca: 'Puma',
      price: 172.0,
      priceFormatted: '172,00',
      image: 'https://www.mundodofutebol.com.br/lojas/00057707/prod/PALMEIRASI2025INFA1.png',
      category: 'moda',
      rating: 4.1,
      reviewCount: 1244,
      stock: 29,
      installments: { count: 9, value: 19.11 },
      description: 'Camisa de time oficial Palmeiras.',
    },
    {
      id: 14,
      name: 'Camisa de time oficial São Paulo',
      marca: 'New Balance',
      price: 143.0,
      priceFormatted: '143,00',
      image:
        'https://images.tcdn.com.br/img/img_prod/1376235/camisa_braziline_sao_paulo_ice_adr_2915_1_1a90b09b96112bec7434bd64cd80fb02.png',
      category: 'moda',
      rating: 4.3,
      reviewCount: 994,
      stock: 30,
      installments: { count: 6, value: 23.83 },
      description: 'Camisa de time oficial São Paulo.',
    },
    {
      id: 15,
      name: 'Camisa de time oficial Santos',
      marca: 'Umbro',
      price: 156.0,
      priceFormatted: '156,00',
      image:
        'https://lojaskoyote.com.br/cdn/shop/files/image-removebg-preview-2023-02-24T195757.402_500x.png?v=1738604977',
      category: 'moda',
      rating: 4.2,
      reviewCount: 873,
      stock: 62,
      installments: { count: 7, value: 22.29 },
      description: 'Camisa de time oficial Santos.',
    },
    {
      id: 16,
      name: 'Livro Pai Rico, Pai Pobre',
      marca: 'Sextante',
      price: 49.9,
      priceFormatted: '49,90',
      image: 'https://aceleraexport.com/wp-content/uploads/2020/08/Pai-Rico-Pai-Pobre.png',
      category: 'livros',
      rating: 4.5,
      reviewCount: 1200,
      stock: 100,
      installments: { count: 3, value: 16.63 },
      description: 'Livro sobre finanças pessoais e investimentos.',
    },
    {
      id: 17,
      name: 'Livro O Poder do Hábito',
      marca: 'Objetiva',
      price: 39.9,
      priceFormatted: '39,90',
      image: 'https://aceleraexport.com/wp-content/uploads/2020/08/Poder-do-Ha%CC%81bito.png',
      category: 'livros',
      rating: 4.6,
      reviewCount: 980,
      stock: 80,
      installments: { count: 3, value: 13.3 },
      description: 'Livro sobre a ciência dos hábitos e como mudá-los.',
    },
    {
      id: 18,
      name: '48 Leis do Poder',
      marca: 'Alta Books',
      price: 59.9,
      priceFormatted: '59,90',
      image: 'https://m.media-amazon.com/images/I/51HXrp3qYvL._AC_UF1000,1000_QL80_.jpg',
      category: 'livros',
      rating: 4.4,
      reviewCount: 750,
      stock: 60,
      installments: { count: 4, value: 14.98 },
      description: 'Livro sobre estratégias de poder e influência.',
    },
    {
      id: 19,
      name: 'O homem mais rico da Babilônia',
      marca: 'BestSeller',
      price: 29.9,
      priceFormatted: '29,90',
      image: 'https://m.media-amazon.com/images/I/81S+vrnIOvL._AC_UF1000,1000_QL80_.jpg',
      category: 'livros',
      rating: 4.3,
      reviewCount: 600,
      stock: 80,
      installments: { count: 3, value: 9.97 },
      description: 'Livro sobre finanças pessoais e investimentos.',
    },
    {
      id: 20,
      name: 'Mais esperto que o diabo',
      marca: 'BestSeller',
      price: 39.9,
      priceFormatted: '39,90',
      image: 'https://www.shopcons.com.br/resizer/view/600/600/true/false/4361.jpg',
      category: 'livros',
      rating: 4.4,
      reviewCount: 750,
      stock: 60,
      installments: { count: 4, value: 9.98 },
      description: 'Livro sobre estratégias de poder e influência.',
    },
    {
      id: 21,
      name: 'As armas da persuasão',
      marca: 'Sextante',
      price: 34.9,
      priceFormatted: '34,90',
      image:
        'https://sextante.com.br/cdn/shop/files/Capa_1_9788575428092.jpg?v=1739211618&width=1445',
      category: 'livros',
      rating: 4.5,
      reviewCount: 800,
      stock: 70,
      installments: { count: 3, value: 11.63 },
      description: 'Livro sobre técnicas de persuasão e influência.',
    },
    {
      id: 22,
      name: 'Whey Protein Integralmedica 900g',
      marca: 'Integralmedica',
      price: 129.9,
      priceFormatted: '129,90',
      image:
        'https://cdn.shopify.com/s/files/1/0742/9632/8446/files/whey-protein-concentrado-pote-900g-9085046.png?v=1776276486',
      category: 'suplementos',
      rating: 4.6,
      reviewCount: 1200,
      stock: 50,
      installments: { count: 5, value: 25.98 },
      description: 'Suplemento alimentar para construção de massa muscular.',
    },
    {
      id: 23,
      name: 'Creatina Monohidratada Integralmedica 300g',
      marca: 'Integralmedica',
      price: 79.9,
      priceFormatted: '79,90',
      image:
        'https://cdn.dooca.store/2383/products/i5f39nzkkbmwhiiuheson3m8nzpcxuxil0ci.png?v=1616878935',
      category: 'suplementos',
      rating: 4.5,
      reviewCount: 800,
      stock: 40,
      installments: { count: 4, value: 19.98 },
      description: 'Suplemento alimentar para aumento de força e desempenho.',
    },
    {
      id: 24,
      name: 'Whey Max Titanium 900g',
      marca: 'Max Titanium',
      price: 119.9,
      priceFormatted: '119,90',
      image:
        'https://lojamaxtitanium.vtexassets.com/assets/vtex.file-manager-graphql/images/3d0a3824-2b1c-4999-94cc-ab6b8c6d1d2a___7f703c74741643a96d487ab5455d6805.webp',
      category: 'suplementos',
      rating: 4.6,
      reviewCount: 1200,
      stock: 50,
      installments: { count: 5, value: 25.98 },
      description: 'Suplemento alimentar para construção de massa muscular.',
    },
    {
      id: 25,
      name: 'Creatina Monohidratada Max Titanium 300g',
      marca: 'Max Titanium',
      price: 79.9,
      priceFormatted: '79,90',
      image:
        'https://lojamaxtitanium.vtexassets.com/assets/vtex.file-manager-graphql/images/2517ee2f-d2bc-4810-8f50-c58842f8ed17___acee599489a56e6a56c4c6d9bb693b54.png',
      category: 'suplementos',
      rating: 4.5,
      reviewCount: 800,
      stock: 40,
      installments: { count: 4, value: 19.98 },
      description: 'Suplemento alimentar para aumento de força e desempenho.',
    },
    {
      id: 26,
      name: 'Pré-treino Hórus 300g sabor Blue Ice',
      marca: 'Max Titanium',
      price: 89.9,
      priceFormatted: '89,90',
      image:
        'https://images.tcdn.com.br/img/img_prod/698210/horus_pote_150g_max_titanium_2587_1_d99891e9d79db4c721e2fe04b01b60be.png',
      category: 'suplementos',
      rating: 4.6,
      reviewCount: 1000,
      stock: 50,
      installments: { count: 5, value: 17.98 },
      description: 'Suplemento alimentar para aumento de energia e desempenho durante o treino.',
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
