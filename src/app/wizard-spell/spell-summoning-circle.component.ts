import { Component } from '@angular/core';
import { MaterialModule } from '../shared/material/material.module';
import {WizardSpellComponent} from "../wizard-spell/wizard-spell.component";

@Component({
  selector: 'app-spell-summoning-circle',
  imports: [MaterialModule, WizardSpellComponent],
  templateUrl: './spell-summoning-circle.component.html',
  styleUrl: './spell-summoning-circle.component.css',
})
export class SpellSummoningCircleComponent {
  summonWizard = true;

  toggleWizard() {
    this.summonWizard = !this.summonWizard;
  }
}
