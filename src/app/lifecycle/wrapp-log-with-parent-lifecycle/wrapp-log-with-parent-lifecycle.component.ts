import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wrapp-log-with-parent-lifecycle',
  templateUrl: './wrapp-log-with-parent-lifecycle.component.html',
  styleUrls: ['./wrapp-log-with-parent-lifecycle.component.scss']
})
export class WrappLogWithParentLifecycleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
