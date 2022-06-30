import { Component, OnInit } from '@angular/core';
import { MathService } from '../math.service';

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.css'],
})
export class Demo2Component implements OnInit {
  addResult: number = 0;

  // Dependency Injection (mathservice is injected to Demo2 component)
  // Demo2 is dependent on MathService
  constructor(private mathService: MathService) {}

  ngOnInit(): void {}

  f1(a: any, b: any) {
    this.addResult = this.mathService.add(a, b);
  }
}
