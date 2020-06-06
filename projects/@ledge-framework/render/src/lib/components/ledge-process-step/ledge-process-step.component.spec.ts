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
    component.config = {
      heads: []
    };
    component.data = [{
      children: [{
        name: "[1] hello"
      }]
    }];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should build cell type', () => {
      expect(component.data[0].children[0].type).toEqual('type_1')
  });
});
