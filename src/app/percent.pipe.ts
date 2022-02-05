import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'percent'
})
export class PercentPipe implements PipeTransform {

  transform(value: any, afterComma:number = 2): string {
    return `${(Math.round((parseInt(value) * 100 * 10**afterComma)) / 10**afterComma)}%`
  }

}
