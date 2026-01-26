import { Component } from '@angular/core';
import { MaterialModule } from '../shared/material/material.module';
import { WizardSpellComponent } from './wizard-spell.component';

@Component({
  selector: 'app-spell-summoning-circle',
  imports: [MaterialModule, WizardSpellComponent],
  templateUrl: './spell-summoning-circle.component.html',
  styleUrl: './spell-summoning-circle.component.css',
})
export class SpellSummoningCircleComponent {
  summonWizard = true;
  manaLevel = 0;

  toggleWizard() {
    this.summonWizard = !this.summonWizard;
    if (this.summonWizard) {
      this.manaLevel = 0; // Reset mana when re-summoning
    }
  }

  channelMana() {
    this.manaLevel++;
  }
}
