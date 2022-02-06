import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'binding-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.scss']
})
export class ParentComponentComponent implements OnInit {

  private _secondBox: string = 'parent2';
  private _value1:any = '';
  private _value2:any = '';
  get secondBox() {return this._secondBox};
  set secondBox(val:any) {
    console.log(`%c secondBox set to: ${val}`, 'background-color: #9ff');
    // this._firstBox = val;
  }
  get value1(){return this._value1}
  get value2(){return this._value2}
  set value1(val:any){
    this._value1 = val;
    // console.log(`%c value1 set to: ${val}`, 'background-color: #ff9');
  }
  set value2(val:any){
    this._value2 = val;
    // console.log(`%c value2 set to: ${val}`, 'background-color: #9ff');
  }

  changeValue1(e:any){
    if (e !== undefined) this.value1 = e;
  }
  changeBox1Value(e:any){
    if (e.target !== undefined) this.value1 = e.target.innerText;    
  }

  changeBox2Value(e:any){
    if (e.target !== undefined) this.value2 = e.target.innerText;    
  }

  changeValue2(e:any){
    this.value2 = e.data;
  }


  changeSecondBox(e:any){
    this.secondBox = e.target.innerText
  }

  

  constructor() { }

  ngOnInit(): void {
  }

}
