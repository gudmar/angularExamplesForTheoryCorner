import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'do-check-test-child',
  templateUrl: './do-check-test-child.component.html',
  styleUrls: ['./do-check-test-child.component.scss']
})
export class DoCheckTestChildComponent implements OnInit {
  private _items:any[] = [];
  @Input() set items(val:any){
    this._items = val;
    console.dir(val)
  }

  get items(){return this._items}
  // constructor() { }

  ngOnInit(): void {
  }



}
