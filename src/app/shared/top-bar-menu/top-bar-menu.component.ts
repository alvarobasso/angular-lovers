import { Component } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-top-bar-menu',
    imports: [MaterialModule, NgIf, RouterModule],
    templateUrl: './top-bar-menu.component.html',
    styleUrl: './top-bar-menu.component.css'
})
export class TopBarMenuComponent {

}
