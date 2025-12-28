import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';

@Component({
  standalone: true,
  selector: 'app-topics-list',
  imports: [MatListModule],
  templateUrl: './topics-list.component.html',
  styleUrls: ['./topics-list.component.css']
})
export class TopicsListComponent {}
