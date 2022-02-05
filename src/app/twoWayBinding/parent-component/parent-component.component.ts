import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'binding-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.scss']
})
export class ParentComponentComponent implements OnInit {

  // private _firstBox:string = 'parent';
  private _secondBox: string = 'parent2';
  private _value1:any = '';
  private _value2:any = '';
  // get firstBox() {return this._firstBox};
  get secondBox() {return this._secondBox};
  // set firstBox(val:any) {
  //   console.log(`%c firstBox set to: ${val}`, 'background-color: #ff9');
  //   this._firstBox = val;
  // }
  set secondBox(val:any) {
    console.log(`%c secondBox set to: ${val}`, 'background-color: #9ff');
    // this._firstBox = val;
  }
  get value1(){return this._value1}
  get value2(){return this._value2}
  set value1(val:any){
    this._value1 = val;
    console.log(`%c value1 set to: ${val}`, 'background-color: #ff9');
    // this.firstBox = val;
  }
  set value2(val:any){
    this._value2 = val;
    console.log(`%c value2 set to: ${val}`, 'background-color: #9ff');
    // this.secondBox = val;
  }

  changeValue1(e:any){
    console.dir(e)
    if (e !== undefined) this.value1 = e;
  }
  changeBox1Value(e:any){
    console.dir(e)
    if (e.target !== undefined) this.value1 = e.target.innerText;    
  }

  changeBox2Value(e:any){
    console.dir(e)
    if (e.target !== undefined) this.value2 = e.target.innerText;    
  }

  changeValue2(e:any){
    this.value2 = e.data;
    console.log(e)
  }


  // changeFirstBox(e:any){
  //   this.firstBox = e.target.innerText;
  // }
  changeSecondBox(e:any){
    this.secondBox = e.target.innerText
  }

  

  constructor() { }

  ngOnInit(): void {
  }

}
