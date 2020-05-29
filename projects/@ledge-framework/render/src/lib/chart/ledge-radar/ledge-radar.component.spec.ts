import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LedgeRadarComponent } from './ledge-radar.component';


describe('LedgeRadarComponent', () => {
  let component: LedgeRadarComponent;
  let fixture: ComponentFixture<LedgeRadarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LedgeRadarComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LedgeRadarComponent);
    component = fixture.componentInstance;
    component.data = [
      {
        children: [
          {
            children: [],
            name: '',
          },
        ],
        name: '',
      },
    ];

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should success build option', () => {
    const data = {name: '团队技能图谱示例', children: [{name: 'Jenkins: 3.5'}, {name: 'Chef: 3.3'}]};
    component.config = {};

    const buildOption = component.buildOption(data);

    expect(buildOption.series[0].data[0].value).toEqual([3.5, 3.3]);
  });
});
