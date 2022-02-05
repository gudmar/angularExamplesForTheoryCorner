import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'menu-parent',
  templateUrl: './menu-parent.component.html',
  styleUrls: ['./menu-parent.component.scss']
})
export class MenuParentComponent {
  @Output() buttonClicked = new EventEmitter();
  lastButton: string = ''; // initial value
  myButtonList = ['b 1', 'b 2', 'b 3'];
  statistics:any = {};
  constructor() { }

  handleButtonWasClicked(data:any){
      console.log(`Button ${data} was clicked`)
      this.lastButton = data;
      this.buttonClicked.emit(data); // inform parent
      this.logToStat(data);
  } 

  logToStat(button:string){
    if (this.statistics[button] === undefined){
      this.statistics[button] = 1;
    } else {
      this.statistics[button] += 1;
    }
    console.dir(this.statistics)
  }

  getKeys(object:any){
    return Object.getOwnPropertyNames(object);
  }
}     