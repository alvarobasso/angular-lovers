import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopBarMenuComponent } from './shared/top-bar-menu/top-bar-menu.component';
import { TopicsListComponent } from './shared/topics-list/topics-list.component';

@Component({
    standalone: true,
    selector: 'app-root',
    imports: [RouterOutlet, TopBarMenuComponent, TopicsListComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-lovers';
}
