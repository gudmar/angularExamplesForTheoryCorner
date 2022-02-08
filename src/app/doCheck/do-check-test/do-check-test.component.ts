import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'do-check-test',
  templateUrl: './do-check-test.component.html',
  styleUrls: ['./do-check-test.component.scss']
})
export class DoCheckTestComponent implements OnInit {

  items:any[]=['',''];
  dupa:string=''
  private _test:string='dupa';
  set test(val:string){
    this._test = val;
    console.log(this._test)
  }
  get test() {return this._test;}

  constructor() { }

  get itemsString(){return JSON.stringify(this.items)}

  ngOnInit(): void {
  }

  addItem(){
    // this.items.push({text:''});
    this.items.push('')
  }
  popItem(){
    this.items.pop();
  }

  logItems(){
    console.dir(this.items)
  }

  textOf(index:number){
    return {
      get: () => {this.items[index].text},
      set: (val:any) => {
        console.log('setting')
        this.items[index].text = val
      }
    }
  }

  updateText(event:any, i:number){
    this.items[i].text = event.target.value;
  }

  createName(i:number) {return i.toString(32)}

  trackByIndex(index: number, obj: any): any {
    return index;
  }

}
