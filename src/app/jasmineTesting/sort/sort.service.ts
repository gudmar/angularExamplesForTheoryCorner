import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SortService {

  constructor() { }

  callFunctionTimes(n:number){
    for (let i=0; i < n; i++){
      this.functionToBeCalled(i)
      
    }
    this.secondFunctionToBeCalled(2)
    
  }

  functionToBeCalled(x:any){}
  secondFunctionToBeCalled(x:any){}

  bubbleSort(arr:any[]){
    let arrCp = [...arr];
    do {
      this.singleBubble(arrCp)
    } while (!this.isSorted(arrCp))
    console.info('returns', arrCp)
    return arrCp;
  }

  singleBubble(arr:any[]){
    function switchItemsIfNeeded(index:number, array:any[]){
      if(array[index] > array[index + 1]){
        let mem = array[index];
        array.splice(index, 1);
        array.splice(index + 1, 0, mem);
      }
    }
    arr.forEach((item:any, index:number, array:any[])=>{
      if (index + 1 < arr.length){
        switchItemsIfNeeded(index, array);
      }
    })
  }

  isSorted(arr:any[]){
    let isSorted = true;
    arr.forEach((item:any, index:number, array:any[]) => {
      if (index + 1 < arr.length){
        if (item > array[index+1]) isSorted = false;
      }
    });
    return isSorted;
  }
}
