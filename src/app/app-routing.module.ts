import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/helper' },
  {
    path: 'helper',
    loadChildren: () =>
        import('./ledge-editor/ledge-editor.module').then(
            (m) => m.LedgeEditorModule
        ),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
