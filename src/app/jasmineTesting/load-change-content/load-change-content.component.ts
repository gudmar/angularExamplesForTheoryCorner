import { Component, OnInit } from '@angular/core';
import { RandomDataProviderService } from '../random-data-provider.service';

@Component({
  selector: 'load-change-content',
  templateUrl: './load-change-content.component.html',
  styleUrls: ['./load-change-content.component.scss']
})
export class LoadChangeContentComponent implements OnInit {
  headline:string = '';
  content:string = '';
  constructor(private dataProvider: RandomDataProviderService) { }

  ngOnInit(): void {
    this.setNewContent();
  }

  setNewContent(){
    let that = this;
    this.dataProvider.getData(2).then(function(value){that.headline = <string>value});;
    this.dataProvider.getData(80).then(function(value){that.content = <string>value});;
  }

  update(){
    this.setNewContent();
  }

}
