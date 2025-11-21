import { effect, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PotionsLabService {
  private effects = [
    {
      img: 'potion_1.gif',
      name: 'Fire Boost',
      effect: 'Increases strength temporarily',
    },
    {
      img: 'potion_2.gif',
      name: 'Lightning Speed',
      effect: 'Increases speed temporarily',
    },
    {
      img: 'potion_3.gif',
      name: 'Focus Mode',
      effect: 'Improves concentration temporarily',
    },
    {
      img: 'potion_4.gif',
      name: 'Healing',
      effect: 'Restores health gradually',
    },
    {
      img: 'potion_5.gif',
      name: 'Teleport',
      effect: 'Instantly move to a nearby location',
    },
  ];

  constructor() {}

  brewPotion() {
    const id = Math.floor(Math.random() * 5);
    return {
      id: Date.now(),
      effect: this.effects[id],
    };
  }
}
