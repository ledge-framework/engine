import { Component, Input, OnInit } from '@angular/core';
import { LedgeListItem } from "../model/ledge-chart.model";

@Component({
  selector: 'ledge-process-step',
  templateUrl: './ledge-process-step.component.html',
  styleUrls: ['./ledge-process-step.component.scss']
})
export class LedgeProcessStepComponent implements OnInit {
  @Input() data: LedgeListItem[];
  @Input() config: any;

  constructor() { }

  ngOnInit(): void {
  }

}
