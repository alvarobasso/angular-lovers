import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'potion-lab',
    loadComponent: () =>
      import('./potions-store/potions-store.component').then(
        (m) => m.PotionsStoreComponent
      ),
  },
];
