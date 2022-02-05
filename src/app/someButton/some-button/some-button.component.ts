import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'some-button',
  templateUrl: './some-button.component.html',
  styleUrls: ['./some-button.component.scss']
})
export class SomeButtonComponent {
  @Input() name: string = '';
  constructor() { }
}
