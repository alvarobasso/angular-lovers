import { Component } from '@angular/core';
import { PotionsLabService } from './potions-lab.service';

import { MaterialModule } from '../shared/material/material.module';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'app-potion-lab',
    imports: [MaterialModule, MatIconModule],
    templateUrl: './potions-store.html',
    styleUrl: './potions-store.component.css'
})
export class PotionsStoreComponent {
  potions: any[] = [];
  injectorActive = false;
  showButton = true;
  showGif = false;

  constructor(
    private potionService: PotionsLabService,
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) {
    this.iconRegistry.addSvgIcon(
    'angular-yellow',
    this.sanitizer.bypassSecurityTrustResourceUrl('icons/angular/angular-yellow.svg')
    );

    this.iconRegistry.addSvgIcon(
    'angular-blue',
    this.sanitizer.bypassSecurityTrustResourceUrl('icons/angular/angular-blue.svg')
    );

    this.iconRegistry.addSvgIcon(
    'angular-red',
    this.sanitizer.bypassSecurityTrustResourceUrl('icons/angular/angular-red.svg')
    );
  }

  craftPotion() {
    this.showButton = false;
    this.showGif = true;
    // Activate Injector animation
    this.injectorActive = true;

    // Deactivate after 500ms
    setTimeout(() => {
      this.injectorActive = false;
      this.showButton = true;
      this.showGif = false;
    }, 3000);

    // Create potion normally
    const potion = this.potionService.brewPotion();
    this.potions.push(potion);

    // Remove potion after animation
    setTimeout(() => {
      this.potions = this.potions.filter(p => p.id !== potion.id);
    }, 10000);
  }
}
