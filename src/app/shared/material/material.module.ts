import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import {MatStepperModule} from '@angular/material/stepper';

@NgModule({
  declarations: [],
  exports: [
    MatDividerModule,
    MatButtonModule,
    MatIconModule,
    CommonModule,
    MatMenuModule,
    MatListModule,
    MatStepperModule,
  ],
  imports: [
    MatDividerModule,
    MatButtonModule,
    MatIconModule,
    CommonModule,
    MatMenuModule,
    MatListModule,
    MatStepperModule,
  ],
})
export class MaterialModule {}
