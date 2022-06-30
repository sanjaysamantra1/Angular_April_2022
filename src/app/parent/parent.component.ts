import { Component, OnInit, ViewChild } from '@angular/core';
import { Child1Component } from '../child1/child1.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent {
  a: number = 10;
  incrementA() {
    this.a = this.a + 1;
  }
  arr = [10, 20, 30, 40, 50];
  @ViewChild('myInputBox') inputBox: any;
  @ViewChild(Child1Component) childRef: any;
  // ngOnDestroy() {
  //   console.log('Parent ngOnDestory');
  // }
  constructor() {
    this.a = 10;
    console.log('Parent constructor');
    // this.inputBox.nativeElement.focus();
    // document.getElementById('para1').style.background = 'red';
    const para = document.getElementById('para1');
    if (para) {
      para.style.background = 'red';
    }
  }
  ngOnInit() {
    console.log('Parent ngOnInit');
  }
  ngOnChanges() {
    console.log('Parent ngOnChanges');
  }
  ngDoCheck() {
    console.log('Parent ngDoCheck');
  }
  // ngAfterContentInit() {
  //   console.log('Parent ngAfterContentInit');
  // }
  // ngAfterContentChecked() {
  //   console.log('Parent ngAfterContentChecked');
  // }
  ngAfterViewInit() {
    console.log('Parent ngAfterViewInit');
    this.inputBox.nativeElement.focus();
    console.log(this.childRef);
    this.childRef.b = 25;
    const para = document.getElementById('para1');
    if (para) {
      para.style.background = 'red';
    }
  }
  // ngAfterViewChecked() {
  //   console.log('Parent ngAfterViewChecked');
  // }

  bParent: any;
  getDataFromChild(data: any) {
    this.bParent = data;
  }
}
