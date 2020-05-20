import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ledge',
  templateUrl: './ledge.component.html',
  styleUrls: ['./ledge.component.scss']
})
export class LedgeComponent implements OnInit {
  @Input() content = '';

  constructor() { }

  ngOnInit(): void {
  }

}
