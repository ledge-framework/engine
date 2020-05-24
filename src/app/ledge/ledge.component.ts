import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'ledge',
  templateUrl: './ledge.component.html',
  styleUrls: ['./ledge.component.scss']
})
export class LedgeComponent implements OnInit, OnChanges {
  @Input() content = '';

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.content);
  }

  ngOnChanges(changes: SimpleChanges) {
    const { content = null } = changes;
    this.content = content?.currentValue || null;
  }
}
