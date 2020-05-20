import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LedgeComponent } from './ledge.component';

describe('LedgeComponent', () => {
  let component: LedgeComponent;
  let fixture: ComponentFixture<LedgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LedgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LedgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
