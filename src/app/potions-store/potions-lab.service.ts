import { effect, Injectable } from '@angular/core';
import { ICharacteristics, IPotion } from './potions-lab-interface';

@Injectable({
  providedIn: 'root',
})
export class PotionsLabService {
  private effects: ICharacteristics[] = [
  {
    img: 'potion_1.gif',
    name: 'Hot Reload',
    description: 'Boosts dev power without restarting',
  },
  {
    img: 'potion_2.gif',
    name: 'Async Surge',
    description: 'Everything resolves faster',
  },
  {
    img: 'potion_3.gif',
    name: 'Deep Focus',
    description: 'Silences Slack and bugs',
  },
  {
    img: 'potion_4.gif',
    name: 'Bug Fix',
    description: 'Heals broken features',
  },
  {
    img: 'potion_5.gif',
    name: 'Quick Deploy',
    description: 'Instantly ships to prod',
  },
];

  constructor() {}

  brewPotion(potion: IPotion | null): IPotion {
    let id = Math.floor(Math.random() * 5);
    while (potion?.characteristic.name === this.effects[id].name) {
      id = Math.floor(Math.random() * 5);
    }
    return {
      id: Date.now(),
      characteristic: this.effects[id],
    };
  }
}
