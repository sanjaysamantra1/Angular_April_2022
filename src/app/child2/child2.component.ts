import { Component, EventEmitter, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css'],
  outputs: ['myEvent'],
})
export class Child2Component implements OnInit {
  @Input() a: any;

  b: number = 20;

  myEvent = new EventEmitter();
  sendDataToParent() {
    this.myEvent.emit(this.b);
  }

  constructor() {}
  ngOnInit(): void {}
}
