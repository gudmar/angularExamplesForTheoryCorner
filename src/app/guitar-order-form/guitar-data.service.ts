import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GuitarDataService {

  constructor() { }
  data: any = [
    {
      make: 'Gibson',
      models: ['Les Paul', 'SG', 'Explorer', 'Flying'],
    },
    {
      make: 'Fender',
      models: ['Stratocaster', 'Telecaster', 'Jaguar', 'Mustang']
    },
    {
      make: 'Defil',
      models: ['Aster', 'Kosmos', 'Jola', 'Jazz'],
      selected: true
    },
  ]

  getData(){return this.data}

  
}
