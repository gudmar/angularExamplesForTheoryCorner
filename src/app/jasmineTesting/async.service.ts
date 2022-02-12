import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AsyncService {
  data:any = {
    a:1, b:2
  }

  constructor() { }

  async getData(){
    return new Promise((resolve)=>{
      setTimeout(()=>{
        this.dummy();
        resolve(this.data)
      }, 100);
    })
  }

  async transformWithWebWorder(data:any){
    return new Promise((resolve)=>{
      setTimeout(()=>{
        let transformedData:any = {};
        for(let key of Object.getOwnPropertyNames(data)){
          transformedData[key] = data[key] ** 2;
        }
        resolve(transformedData)
      }, 100)
    })
  }

  test(){
    return (this.dummyIs3() === 3);
  }

  dummyIs3(){
    return 2;
  }

  dummy(){
    console.log('DUMMY')
    this.nextDummy();
  }

  nextDummy(){console.log('NEXT DUMMY')}
}
