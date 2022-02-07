import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }

  logFunction: any;
  
  registerLogger(loggingFunction:any){
    this.logFunction = loggingFunction;
  }

  log(message:string, source:string, color:string, method:string){
    if (this.logFunction !== undefined){
      this.logFunction(message, source, color, method);
    }
  }
  

}
