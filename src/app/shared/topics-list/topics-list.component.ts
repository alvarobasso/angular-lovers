import { Component } from '@angular/core';
import { MaterialModule } from '../material/material.module';

@Component({
  selector: 'app-topics-list',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './topics-list.component.html',
  styleUrl: './topics-list.component.css'
})
export class TopicsListComponent {

}
