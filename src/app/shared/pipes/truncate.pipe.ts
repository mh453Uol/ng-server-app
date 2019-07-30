import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    const _value = value as string;
    return _value.substr(0, 10) + '...';
  }
}
