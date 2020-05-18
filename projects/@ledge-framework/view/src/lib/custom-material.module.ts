import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';

const modules = [
  MatSidenavModule,
  MatIconModule,
  MatButtonModule
];

@NgModule({
  imports: modules,
  exports: modules,
})
export class CustomMaterialModule {}
