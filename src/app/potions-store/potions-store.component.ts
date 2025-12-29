import { Component } from '@angular/core';
import { PotionsLabService } from './potions-lab.service';
import { MaterialModule } from '../shared/material/material.module';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { IPotion } from './potions-lab-interface';

@Component({
  selector: 'app-potion-lab',
  imports: [MaterialModule, MatIconModule],
  templateUrl: './potions-store.html',
  styleUrl: './potions-store.component.css',
})
export class PotionsStoreComponent {
  potion: IPotion | null = null;
  animateEffect = true;

  constructor(
    private potionService: PotionsLabService,
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) {
    this.iconRegistry.addSvgIcon(
      'angular-yellow',
      this.sanitizer.bypassSecurityTrustResourceUrl(
        'icons/angular/angular-yellow.svg'
      )
    );

    this.iconRegistry.addSvgIcon(
      'angular-blue',
      this.sanitizer.bypassSecurityTrustResourceUrl(
        'icons/angular/angular-blue.svg'
      )
    );

    this.iconRegistry.addSvgIcon(
      'angular-red',
      this.sanitizer.bypassSecurityTrustResourceUrl(
        'icons/angular/angular-red.svg'
      )
    );
  }

  craftPotion() {
    this.potion = this.potionService.brewPotion(this.potion);
    this.animateEffect = false;
    setTimeout(() => {
      this.animateEffect = true;
    });
  }
}
