import { Routes } from '@angular/router';
import { MainLayout } from './layout/main-layout/main-layout';
import { Home } from './features/pages/home/home';
import { Shop } from './features/pages/shop/shop';
import { ProductPage } from './features/pages/product/product';

export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      {
        path: '',
        component: Home,
      },
      {
        path: 'shop',
        component: Shop,
      },
      {
        path: 'product/:id',
        component: ProductPage,
      },
    ],
  },
];
