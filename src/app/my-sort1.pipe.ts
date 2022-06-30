import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mySort1',
  pure:false
})
export class MySort1Pipe implements PipeTransform {
  transform(arr: any) {
    return arr.sort((a: any, b: any) => a - b);
  }
}
