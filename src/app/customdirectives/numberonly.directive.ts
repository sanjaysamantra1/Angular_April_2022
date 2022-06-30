import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[numberonly]',
})
export class NumberonlyDirective {
  constructor() {
    this.myBgColor = '';
  }
  @HostBinding('style.background-color') myBgColor: string;
  @HostListener('keyup', ['$event'])
  handleKeyPress(e: { target: { value: string } }) {
    let regex = new RegExp(/^[0-9]*$/);
    if (!regex.test(e.target.value)) {
      this.myBgColor = 'red';
    } else {
      this.myBgColor = 'cyan';
    }
  }
}
