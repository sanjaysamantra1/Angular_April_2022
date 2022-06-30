import { Component, OnInit } from '@angular/core';
import { MathService } from '../math.service';

@Component({
  selector: 'app-demo1',
  template: ` <p>demo1 works!</p> `,
  styles: [],
})
export class Demo1Component implements OnInit {
  constructor(private mathObj: MathService) {}

  ngOnInit(): void {
    console.log(this.mathObj.add(2, 3));
  }
}
