import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatCheckboxModule } from '@angular/material/checkbox';

const modules = [
  MatSliderModule,
  MatCheckboxModule,

  // CDK
  DragDropModule,
];

@NgModule({
  imports: modules,
  exports: modules,
})
export class CustomMaterialModule {}
