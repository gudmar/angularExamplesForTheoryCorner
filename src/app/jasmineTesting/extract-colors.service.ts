import { Injectable } from '@angular/core';

const BLUE = 1;
const GREEN = 2;
const RED = 4;

@Injectable({
  providedIn: 'root'
})

export class ExtractColorsService {

  

  constructor() { }

   colorStringToNumber(color:string):number{
    return parseInt(color.slice(1, color.length), 16);
  }


   getIngrediance(color:string, flag:string):number{
    return this.colorStringToNumber(color) & parseInt(flag,16)
  }

   getBlue(color: string){
     console.log(this)
    return this.getIngrediance(color, 'ff')
  }

   getGreen(color:string):number{
    return this.getIngrediance(color, 'ff00')
  }

   getRed(color:string):number{
    return this.getIngrediance(color, 'ff0000')
  }



  getFiltered(colorFlag:number, color:string){

    let output = 0;
    if (colorFlag & BLUE) output = output | this.getBlue(color);
    if (colorFlag & GREEN) output = output | this.getGreen(color);
    if (colorFlag & RED) output = output | this.getRed(color);
    let stringOutput = output.toString(16);
    
    return `#${this.prefix0(output.toString(16))}`;
  }

  prefix0(val:string){
    let howMany0Miss = 6 - val.length;
    let prefix = '';
    for (let i = 0; i < howMany0Miss; i++){
      prefix += '0';
    }
    return prefix + val;
  }

}
