import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LedgeProcessStepComponent } from './ledge-process-step.component';

describe('ProcessStepComponent', () => {
  let component: LedgeProcessStepComponent;
  let fixture: ComponentFixture<LedgeProcessStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LedgeProcessStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LedgeProcessStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
