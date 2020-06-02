import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LedgeRenderComponent } from './ledge-render.component';
import { SimpleChange, SimpleChanges } from '@angular/core';

describe('LedgeChecklistComponent', () => {
  let component: LedgeRenderComponent;
  let fixture: ComponentFixture<LedgeRenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LedgeRenderComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LedgeRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should build paragraph', () => {
    const content = `这是一个段落`;

    const simpleChange = new SimpleChange('', content, false);
    const changesObj: SimpleChanges = {
      content: simpleChange
    };
    component.ngOnChanges(changesObj);

    expect(component.markdownData.length).toEqual(1);
    expect(component.markdownData[0].type).toEqual('paragraph');
    expect(component.markdownData[0].data).toEqual(content);
  });

  it('should build checklist', () => {
    const content = `
\`\`\`checklist
- DevOps 检查清单
  - 文化
    - 确保跨组织和团队中的业务对齐
\`\`\`
`;

    const simpleChange = new SimpleChange('', content, false);
    const changesObj: SimpleChanges = {
      content: simpleChange
    };
    component.ngOnChanges(changesObj);

    expect(component.markdownData.length).toEqual(1);
    expect(component.markdownData[0].type).toEqual('checklist');
    expect(component.markdownData[0].data[0].name).toEqual('DevOps 检查清单');
  });

  it('should checklist checked', () => {
    const content = `
\`\`\`checklist
- [x] DevOps 检查清单
  - [ ] checked false
\`\`\`
`;

    const simpleChange = new SimpleChange('', content, false);
    const changesObj: SimpleChanges = {
      content: simpleChange
    };
    component.ngOnChanges(changesObj);

    expect(component.markdownData[0].data[0].checked).toEqual(true);
    expect(component.markdownData[0].data[0].children[0].checked).toEqual(false);
  });

  it('should support for table inline', () => {
    const content = `
| 工具          | 项目地址                          |
| ------------- | ------------------------------- |
| wrk           | [https://github.com/wg/wrk](https://github.com/wg/wrk)     |
| Apache JMeter | [https://jmeter.apache.org/](https://jmeter.apache.org/)   |

`;

    const simpleChange = new SimpleChange('', content, false);
    const changesObj: SimpleChanges = {
      content: simpleChange
    };
    component.ngOnChanges(changesObj);

    expect(component.markdownData[0].type).toEqual('table');
    expect(component.markdownData[0].cells[0][1])
      .toEqual('<a target="_blank" href="https://github.com/wg/wrk">https://github.com/wg/wrk</a>');
  });

  it('should support for radar float', () => {
    const content = `
\`\`\`radar
 - 团队技能图谱示例
  - Jenkins: 3.5
  - Chef: 3.3
\`\`\`
`;

    const simpleChange = new SimpleChange('', content, false);
    const changesObj: SimpleChanges = {
      content: simpleChange
    };
    component.ngOnChanges(changesObj);

    expect(component.markdownData[0].type).toEqual('radar');
  });
  it('should add target for link', () => {
    const content = `
[Phodal](https://www.phodal.com)
`;

    const simpleChange = new SimpleChange('', content, false);
    const changesObj: SimpleChanges = {
      content: simpleChange
    };
    component.ngOnChanges(changesObj);

    expect(component.markdownData[0].type).toEqual('paragraph');
    expect(component.markdownData[0].data).toEqual('<a target="_blank" href="https://www.phodal.com">Phodal</a>');
  });


});
