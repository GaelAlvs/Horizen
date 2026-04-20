import { Component } from '@angular/core';

interface Product {
  name: string;
  marca: string;
  price: string;
  image: string;
}

@Component({
  selector: 'app-catalog',
  imports: [],
  templateUrl: './catalog.html',
  styleUrl: './catalog.css',
})
export class Catalog {
  Products: Product[] = [
    {
      name: 'Videogame PlayStation®5 Slim Digital 1TB',
      marca: 'PlayStation',
      price: 'R$3.560,90',
      image:
        'https://png.pngtree.com/png-vector/20250212/ourmid/pngtree-ps-5-or-playstation-controller-joystick-png-image_15443900.png',
    },
    {
      name: 'Controle Sony DualSense PS5, Sem Fio, Branco',
      marca: 'PlayStation',
      price: 'R$429,90',
      image:
        'https://png.pngtree.com/png-vector/20241205/ourmid/pngtree-playstation-5-controller-joystick-png-image_14639420.png',
    },
    {
      name: 'Sony Headset Pulse 3D Wireless para PlayStation 5',
      marca: 'PlayStation',
      price: 'R$920,40',
      image:
        'https://store.sony.com.au/dw/image/v2/ABBC_PRD/on/demandware.static/-/Sites-sony-master-catalog/default/dwc903d3fe/images/PS5ELITEWIRELESSHS/PS5ELITEWIRELESSHS.png?sw=442&sh=442&sm=fit',
    },
    {
      name: 'Borderlands 4 - PlayStation 5 Mídia Física',
      marca: '2K Games',
      price: 'R$158,90',
      image:
        'https://cdn.awsli.com.br/800x800/241/241991/produto/366960972/borderlands-5lcwtz6daa.png',
    },
    {
      name: 'Elden Ring - Shadow of the Erdtree PlayStation 5',
      marca: 'Bandai Namco',
      price: 'R$214,90',
      image:
        'https://toyorgame.com.sg/cdn/shop/files/PS5EldenRingShadowoftheErdtree.png?v=1712804023',
    },
  ];
}
