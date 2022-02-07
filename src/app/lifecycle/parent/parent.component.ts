import { Component, OnInit } from '@angular/core';
import {LoggerService} from '../logger.service';

@Component({
  selector: 'lifecycle-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  children:any[] = [];
  private _lastNumber = 0;
  constructor(private logger: LoggerService) { 
    
  }

  get nextChildId(){
    this._lastNumber++;
    return this._lastNumber;
  }

  ngOnInit(): void {
    this.logger.log(`Parent: ngOnInit`, 'parent', '#afa', 'ngOnInit');
  }
  ngOnChanges(): void{
    this.logger.log(`Parent: ngOnChanges`, 'parent', 'yellow', 'ngOnChanges')
  }
  ngDoCheck(): void{
    this.logger.log(`Parent: ngDoCheck`, 'parent', 'orange', 'ngDoCheck')
  }
  ngAfterContentInit(): void{
    this.logger.log(`Parent: AfterContentInit`, 'parent', 'cyan', 'ngAfterContentInit')
  }
  ngAfterContentChecked(): void{
    this.logger.log(`Parent: AfterContentChecked`, 'parent', 'magenta', 'ngAfterContentChecked')
  }



  appendChild(){
    this.children.push({id: this.nextChildId, value: 0});
  }
  popChild(){
    this.children.pop();
  }

  findChildIndex(id:number){
   return this.children.findIndex((item)=>{
      return item.id === id;
    })
  }
  removeChild(e:any){

    let indexOfTarget = this.findChildIndex(e);

    this.children.splice(indexOfTarget, 1);
  }



  changeChildValue(index:number){
      console.log('changning')
      let indexOfTarget = this.findChildIndex(index);
      this.children[indexOfTarget].value += 1;
    
  }

}
