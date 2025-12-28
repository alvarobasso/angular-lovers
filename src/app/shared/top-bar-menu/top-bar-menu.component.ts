import { Component } from '@angular/core';

import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';

@Component({
    standalone: true,
    selector: 'app-top-bar-menu',
    imports: [RouterModule, MaterialModule],
    templateUrl: './top-bar-menu.component.html',
    styleUrl: './top-bar-menu.component.css'
})
export class TopBarMenuComponent {

}
