import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-topics-list',
  imports: [MatListModule, RouterModule],
  templateUrl: './topics-list.component.html',
  styleUrls: ['./topics-list.component.css'],
})
export class TopicsListComponent {
  topics = [
    { name: 'Potions Store', path: 'potions-store' },
    { name: 'Wizard Spell', path: 'wizard-spell' },
  ];
}
