import { Component, OnInit } from '@angular/core';
import {LoggerService} from '../logger.service';
@Component({
  selector: 'logging-component',
  templateUrl: './logging-component.component.html',
  styleUrls: ['./logging-component.component.scss']
})
export class LoggingComponentComponent implements OnInit {
  messages:any[] = [];
  methods:any[] = [
    {name:'ngOnChanges',value:true},
    {name:'ngOnInit',value:true},
    {name:'ngDoCheck',value:true},
    {name:'ngAfterContentInit',value:true},
    {name:'ngAfterContentChecked',value:true},
    {name:'ngAfterViewInit',value:true},
    {name:'ngAfterViewChecked',value:true},
    {name:'ngOnDestroy',value:true},
  ]

  constructor(private logger: LoggerService) { 
    logger.registerLogger(this.loggingFunction.bind(this));
  }

  ngOnInit(): void {
  }
  ngAfterViewChecked(){
    console.dir(this.methods)
  }
  
  shoulLogMethod(name:string){
    let index = this.methods.findIndex((item:any)=>{
      return item.name === name
    })
    console.log(name)
    if (index === -1) return false;
    console.log(this.methods[index].value)
    return this.methods[index].value;
  }

  loggingFunction(message:string, source:string, color:string, method:string){
    if (this.shoulLogMethod(method)){
      this.messages.push({message:message, source:source, color:color});
    }
  }
  
  getClasses(source:string){
    if(source === "parent") return "badge rounded-pill badge-dark bg-dark";
    return "badge rounded-pill bg-info "
  }

  clearLoggingPane(){
    this.messages = [];
  }

}
