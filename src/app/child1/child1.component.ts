import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DoCheck,
  OnChanges,
  OnInit,
  SimpleChange,
} from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css'],
  inputs: ['aChild', 'b', 'arr'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Child1Component implements OnChanges, OnInit, DoCheck {
  aChild: any;
  b: any;
  arr: any;

  constructor(private changeDetectorObj: ChangeDetectorRef) {
    console.log('child constructor');
  }
  ngOnChanges(myChanges: any) {
    // N times
    console.log(myChanges);
    console.log('child ngOnChanges');
  }
  ngOnInit() {
    console.log('child ngOnInit'); // only once after 1st onchange
  }
  ngDoCheck() {
    console.log('child ngDoCheck');
    this.changeDetectorObj.markForCheck();
  }
  refresh() {
    this.changeDetectorObj.markForCheck();
  }
  // ngAfterContentInit() {
  //   console.log('child ngAfterContentInit');
  // }
  // ngAfterContentChecked() {
  //   console.log('child ngAfterContentChecked');
  // }
  // ngAfterViewInit() {
  //   console.log('child ngAfterViewInit');
  // }
  // ngAfterViewChecked() {
  //   console.log('child ngAfterViewChecked');
  // }
  // ngOnDestroy() {
  //   console.log('child ngOnDestory');
  // }
}
