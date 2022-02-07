import { Component, OnInit } from '@angular/core';
import {LoggerService} from '../logger.service';
@Component({
  selector: 'logging-component',
  templateUrl: './logging-component.component.html',
  styleUrls: ['./logging-component.component.scss']
})
export class LoggingComponentComponent implements OnInit {
  messages:any[] = [];
  consoleMessages:any[] = [];
  methods:any[] = [
    {name:'ngOnChanges',value:true, color:'yellow'},
    {name:'ngOnInit',value:true, color:'green'},
    {name:'ngDoCheck',value:true, color:'orange'},
    {name:'ngAfterContentInit',value:true, color:'cyan'},
    {name:'ngAfterContentChecked',value:true, color:'magenta'},
    {name:'ngAfterViewInit',value:true, color:'white'},
    {name:'ngAfterViewChecked',value:true, color:'pink'},
    {name:'ngOnDestroy',value:true, color:'red'},
  ]

  cp:any[]=[];
  documentLogging = true;
  constructor(private logger: LoggerService) { 
    logger.registerLogger(this.loggingFunction.bind(this));
  }

  getLoggingToDocumentLabel(){
    return this.documentLogging?'logging to document enabled':'logging to document disabled'
  }

  ngOnInit(): void {
  }
  ngAfterViewChecked(){
  }

  
  shoulLogMethod(name:string){
    let index = this.methods.findIndex((item:any)=>{
      return item.name === name
    })
    if (index === -1) return false;
    this.countMethodCall(name)
    return this.methods[index].value;
  }

  getStyleOf(name:string){
    let index = this.methods.findIndex((item:any)=>{
      return item.name === name
    })
    let method = this.methods[index];
    if(method === undefined) return '';
    return `width:${method.count===undefined?0:method.count*5}px;background-color:${method.color};`
  }

  methodsForConsole = JSON.parse(JSON.stringify(this.methods));

  countMethodCall(name:string){
    let index = this.methods.findIndex((item:any)=>{
      return item.name === name
    })
    if (index !== -1) {
      if(this.methods[index].count === undefined) {
        if(this.documentLogging) {this.methods[index].count = 1}
        this.methodsForConsole[index].count = 1;
      } else {
        if (this.documentLogging) {this.methods[index].count++;}
        this.methodsForConsole[index].count++;
      }
    }
    
  }

  loggingFunction(message:string, source:string, color:string, method:string){
    if (this.shoulLogMethod(method)){
      this.cp = this.messages.map((item)=>{return item})
      // this.cp.push({message:message, source:source, color:color});
      if(this.documentLogging){
        this.messages.push({message:message, source:source, color:color});
      }
      this.consoleMessages.push({message:message, source:source, color:color});
      
      // this.messages = this.cp;
    }
  }

  ngAfterContentChanged(){
    this.messages = this.cp;
  }
  
  getClasses(source:string){
    if(source === "parent") return "badge rounded-pill badge-dark bg-dark";
    return "badge rounded-pill bg-info "
  }

  clearLoggingPane(){
    this.messages = [];
    this.consoleMessages = [];
    for (let item of this.methods){
      item.count = 0;
    }
  }

  dumpConsoleLogReport(){
    let stat:any = {};
    for (let item of this.methodsForConsole){
      stat[item.name] = item.count || 0;
    }
    console.groupCollapsed('Call order');
    for(let item of this.consoleMessages){
      console.log(`%c${item.message}`, `background-color: ${item.source==='parent'?'black':'blue'}; color:white; border: thick ${item.color} solid; border-radius:8px; padding: 4px;`)
      // console.log(`%c${item.message}`, `background-color: ${item.source==='parent'?'black':'gray'}`)
    }
    console.groupEnd();
    console.table(stat);
  }

}
