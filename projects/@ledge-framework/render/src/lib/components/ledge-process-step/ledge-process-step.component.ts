import { Component, Input, OnInit } from '@angular/core';
import { LedgeListItem } from '../model/ledge-chart.model';

@Component({
  selector: 'ledge-process-step',
  templateUrl: './ledge-process-step.component.html',
  styleUrls: ['./ledge-process-step.component.scss']
})
export class LedgeProcessStepComponent implements OnInit {
  @Input() data: LedgeListItem[];
  @Input() config: any;
  regex = /\[(\d+)\]\s?(.*)/;
  items = [];

  constructor() { }

  ngOnInit(): void {
    if (!this.data) {
      return;
    }

    if (this.regex.test(this.data[0].children[0].name)) {
      this.data.map((column) => {
        column.children.map((cell) => {
          const regExpExecArray = this.regex.exec(cell.name);
          if (regExpExecArray && regExpExecArray.length >= 2) {
            cell.type = 'type_' + regExpExecArray[1];
            cell.name = regExpExecArray[2];
          }
        });
      });
    }

    this.items = this.data;
  }
}
