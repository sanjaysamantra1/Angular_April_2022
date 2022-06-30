import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css'],
})
export class PipesComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}

  name: string = 'saChiN teNdulKAr';
  mySal: number = 5000;
  myDOB: Date = new Date();
  user = { name: 'sachin', age: 45, sal: 5000 };
  arr = [20, 30, 40, 10, 50, 60, 70];

  msg: string = '';
  msg2: string = '';
  newDigit:any;
}
