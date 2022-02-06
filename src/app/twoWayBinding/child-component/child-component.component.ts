import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'binding-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.scss']
})
export class ChildComponentComponent implements OnInit {
  private _value1:any = '';
  private _value2:any = '';
  get value1(){return this._value1}
  get value2(){return this._value2}

  private _firstBox:string = 'any';
  set firstBox(val:string) {
    // console.log(`%cValue firstBox set to ${val}`, 'background-color: #f99;')
    this._firstBox = val;
  }
  get firstBox(){ return this._firstBox;}
  constructor() { }

  @Input() set value1(val:any){
    this._value1 = val;
    this.value1Change.emit(val)
  }
  @Output() value1Change = new EventEmitter<any>();

  ngOnInit(): void {
  }

  changeValue1(e:any){
    this.value1 = e.target.innerText;
    this.value1Change.emit(this.value1)
  }

}
