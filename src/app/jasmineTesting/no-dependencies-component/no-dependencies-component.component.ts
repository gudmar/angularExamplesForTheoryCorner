import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'no-dependencies-component',
  templateUrl: './no-dependencies-component.component.html',
  styleUrls: ['./no-dependencies-component.component.scss']
})
export class NoDependenciesComponentComponent implements OnInit {

  constructor() { }
  content: string = '';
  ngOnInit(): void {
    this.content = "This content was set by the ngOnInit"
  }

}
