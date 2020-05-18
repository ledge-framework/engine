import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LedgeEditorComponent } from './ledge-editor.component';
import { LedgeEditorModule } from './ledge-editor.module';

import 'brace/index';

describe('LedgeHelperComponent', () => {
  let component: LedgeEditorComponent;
  let fixture: ComponentFixture<LedgeEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        LedgeEditorModule,
      ],
      declarations: [LedgeEditorComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LedgeEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
