import { Component } from '@angular/core';
import { Catalog } from '../../components/catalog/catalog';

@Component({
  selector: 'app-shop',
  imports: [Catalog],
  templateUrl: './shop.html',
  styleUrl: './shop.css',
})
export class Shop {}
