import { Pipe, PipeTransform } from '@angular/core';
import { mergeScan } from 'rxjs';

@Pipe({
  name: 'remaining',
})
export class RemainingPipe implements PipeTransform {
  transform(msg: string, len: any) {
    return len - msg.length;
  }
}
