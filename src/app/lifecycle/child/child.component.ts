import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {LoggerService} from '../logger.service';

@Component({
  selector: 'lifecycle-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  constructor(private logger: LoggerService) { }
  @Input() myNumber: number = 0;
  @Input() value: number = 0;
  ngOnInit(): void {
    this.logger.log(`Child ${this.myNumber} OnInit`, 'child', '#afa', 'ngOnInit')
  }
  ngOnDestroy(): void {
    this.logger.log(`Child ${this.myNumber} OnDestroy`, 'child', 'red', 'ngOnDestroy')
  }
  ngOnChanges(): void{
    this.logger.log(`Child ${this.myNumber}: ngOnChanges`, 'child', 'yellow', 'ngOnChanges')
  }
  ngDoCheck(): void{
    this.logger.log(`Child ${this.myNumber}: ngDoCheck`, 'child', 'orange', 'ngOnCheck')
  }
  ngAfterContentInit(): void{
    this.logger.log(`Child ${this.myNumber}: AfterContentInit`, 'child', 'cyan', 'ngAfterContentInit')
  }
  ngAfterContentChecked(): void{
    this.logger.log(`Child ${this.myNumber}: AfterContentChecked`, 'child', 'magenta', 'ngAfterContentChecked')
  }



  @Output() removeMe =new EventEmitter<any>();

  remove(){
    console.log(this.myNumber)
    this.removeMe.emit(this.myNumber);
  }
  killMe(){
    this.remove();
  }

}
