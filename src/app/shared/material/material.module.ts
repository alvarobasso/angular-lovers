import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [],
  imports: [MatDividerModule, MatButtonModule, MatIconModule, CommonModule],
  exports: [MatDividerModule, MatButtonModule, MatIconModule, CommonModule],
})
export class MaterialModule {}
