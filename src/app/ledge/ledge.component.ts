import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'ledge-theme',
  templateUrl: './ledge.component.html',
  styleUrls: ['./ledge.component.scss']
})
export class LedgeComponent implements OnInit, OnChanges {
  @Input() content;

  constructor() {
  }

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes) {
      const {content = null} = changes;
      this.content = content?.currentValue || null;
    }
  }
}
