import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LedgeRenderModule } from '@ledge-framework/render';
import { AngularSplitModule } from 'angular-split';
import { AceEditorModule } from 'ngx-ace-tern';

import { LedgeEditorComponent } from './ledge-editor.component';

@NgModule({
  declarations: [LedgeEditorComponent],
  imports: [
    CommonModule,
    FormsModule,
    LedgeRenderModule,
    AceEditorModule,
    AngularSplitModule.forRoot(),
    RouterModule.forChild([{ path: '', component: LedgeEditorComponent }]),
  ],
})
export class LedgeEditorModule {}
