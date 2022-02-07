import { Component, OnInit, ViewChild } from '@angular/core';
import { GuitarDataService } from './guitar-data.service';

@Component({
  selector: 'guitar-order-form',
  templateUrl: './guitar-order-form.component.html',
  styleUrls: ['./guitar-order-form.component.scss']
})
export class GuitarOrderFormComponent implements OnInit {
  private _products: any[] = [];
  private _selectedModel: any;
  private _selectedMake: any;
  ordererName: any;
  ordererMail: string = '';

  @ViewChild('orderForm') form:any;

  get products(){return this._products}

  set products(val:any) {
    let isSelectedMakeEmpty = ()=>{
      if(this.selectedMake === undefined || this.selectedMake === null) return true
      return false;
    }
    this._products = val;
    if (isSelectedMakeEmpty()) this.selectedMake = this.getDefaultMake();
  }



  get selectedModel() { 
    function isIndexValid(id:number){
      if (id === undefined) return false;
      if (id < 0) return false;
      return true;
    }
    let currentProductIndex = this.getCurrnetProductIndex();
    if (currentProductIndex < 0) return '';
    let modelsArray = this.products[currentProductIndex].models;
    let indexFromMemory = this.products[currentProductIndex].lastSelection;
    let index = isIndexValid(indexFromMemory) ? indexFromMemory : 0;
    return modelsArray[index];
  }

  set selectedModel( val:string)  {
    let currentProductIndex = this.getCurrnetProductIndex();
    if (currentProductIndex >= 0){
      let modelsArray = this.products[currentProductIndex].models;
      function findModelIndex(){
        return modelsArray.findIndex((item: any)=>{
          return item === val;
        })
      }
      this.products[currentProductIndex].lastSelection = findModelIndex();
    }
  }

  get selectedMake(){return this._selectedMake};
  set selectedMake(val:string){
    this._selectedMake = val;
  }

  getCurrnetProductIndex(){
    return this.products.findIndex((item:any, index:number)=>{
      return item.make === this.selectedMake
    })
  }

  

  get availableModels() {
    let currentProductIndex = this.getCurrnetProductIndex();
    if (currentProductIndex === -1 ) return []
    return this.products[currentProductIndex].models;
  }

  constructor(private dataProvider: GuitarDataService) { 

  }

  ngOnInit(): void {
    this.products = this.dataProvider.getData();
  }

  getDefaultMake(){
    let def = this.products.findIndex((item:any, index:number)=>{
      return item.selected === true;
    })
    if (def > -1) return(this.products[def].make)
    return ''
  }


  submitFrom(){
    this.formContent = this.getFromContent();
  }

  formContent: any;

  getFromContent(){
    console.dir(this.form)
    let formContent = this.form.form.value;
    let keys = Object.getOwnPropertyNames(formContent);
    let output = [];
    for (let field of keys){
      output.push({name: field, content: formContent[field]})
    }
    return output;
  }

  clearForm(){
    this.form.reset();
    this.formContent = []
    setTimeout(()=>{this.products = this.dataProvider.getData();});
    // async usage to force view update
  }


}
