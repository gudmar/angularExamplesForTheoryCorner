import { Component, OnInit } from '@angular/core';

import { ExtractColorsService } from '../extract-colors.service'

@Component({
  selector: 'jasmine-test',
  templateUrl: './jasmine-test.component.html',
  styleUrls: ['./jasmine-test.component.scss']
})
export class JasmineTestComponent implements OnInit {
  private _ingrediance={
    isRedOn:true, isGreenOn: true, isBlueOn: true
  }
  private _inputColor:string = '#000aaa';
  filteredColor:string = this._inputColor;

  constructor(private colorExtractor: ExtractColorsService) { }



  set isRedOn(val:boolean){
    this._ingrediance.isRedOn = val;
    this.recalculateInputColor();
  }
  get isRedOn() {return this._ingrediance.isRedOn}

  set isGreenOn(val:boolean){
    this._ingrediance.isGreenOn = val;
    this.recalculateInputColor();
  }
  get isGreenOn() {return this._ingrediance.isGreenOn}

  set isBlueOn(val:boolean){
    this._ingrediance.isBlueOn = val;
    this.recalculateInputColor();
  }
  get isBlueOn() {return this._ingrediance.isBlueOn}

  get colorFlag(){
    let output = 0;
    if (this.isRedOn) output |= 4;
    if (this.isBlueOn) output |= 1;
    if (this.isGreenOn) output |= 2;
    return output;
  }
  set inputColor(val:string) {
    this._inputColor = val;
    this.recalculateInputColor();
  }
  get inputColor() {
    return this._inputColor
  }

  ngOnInit(): void {}

  recalculateInputColor(){
    this.filteredColor = this.colorExtractor.getFiltered(this.colorFlag, this._inputColor)
  }




}
        
