import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomDataProviderService {

  constructor() { }

  getData(len:number){
    let output = '';
    let count = 0;
    return new Promise((resolve)=>{
      let int = setInterval(()=>{
        let d = Date.now() * Math.random();
        output += ` ` + d.toString(32);
        count++;
        if (count >= len) {
          clearTimeout(int);
          resolve(output);
        }
      },1)  
    })
  }

}
