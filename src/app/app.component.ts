import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopBarMenuComponent } from './shared/top-bar-menu/top-bar-menu.component';
import { TopicsListComponent } from './shared/topics-list/topics-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TopBarMenuComponent, TopicsListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-lovers';
}
