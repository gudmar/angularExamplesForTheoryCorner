import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'some-button-menu',
  templateUrl: './some-button-menu.component.html',
  styleUrls: ['./some-button-menu.component.scss']
})
export class SomeButtonMenuComponent {
  @Input() buttons: string[] = [''];
  @Output() buttonClicked = new EventEmitter();
  constructor() { }

  handleButtonClicked(data:any, buttonN:string){
      console.log(`Button ${buttonN} was clicked`)
      this.buttonClicked.emit(buttonN);
  }
}           
