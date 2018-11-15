import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatGridListModule,
    MatListModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatGridListModule,
    MatListModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  declarations: []
})
export class MaterialsModule { }
