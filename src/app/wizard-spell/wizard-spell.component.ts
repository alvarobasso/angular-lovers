import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ISpellPhase } from './interfaces';
import { MaterialModule } from '../shared/material/material.module';

@Component({
  selector: 'app-wizard-spell',
  imports: [MaterialModule],
  templateUrl: './wizard-spell.component.html',
  styleUrl: './wizard-spell.component.css',
})
export class WizardSpellComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  
  @Input() manaLevel = 0;

  constructorRuns = 0;
  onInitRuns = 0;
  onChangesRuns = 0;
  doCheckRuns = 0;
  afterViewInitRuns = 0;
  afterViewCheckedRuns = 0;
  onDestroyRuns = 0;

  constructor() {
    this.constructorRuns++;
  }

  ngOnInit() {
    this.onInitRuns++;
  }

  ngOnChanges(changes: SimpleChanges) {
    this.onChangesRuns++;
  }

  ngDoCheck() {
    this.doCheckRuns++;
  }

  ngAfterViewInit() {
    this.afterViewInitRuns++;
  }

  ngAfterViewChecked() {
    this.afterViewCheckedRuns++;
  }

  ngOnDestroy() {
    this.onDestroyRuns++;
  }

}
