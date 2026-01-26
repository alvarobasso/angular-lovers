import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'potions-store',
    loadComponent: () =>
      import('./potions-store/potions-store.component').then(
        (component) => component.PotionsStoreComponent
      ),
  },
  {
    path: 'wizard-spell',
    loadComponent: () =>
      import('./wizard-spell/spell-summoning-circle.component').then(
        (component) => component.SpellSummoningCircleComponent
      ),
  },
];
