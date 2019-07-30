import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {
  transform(value: any, limit: number = 10): any {
    const _value = value as string;
    if (_value.length > limit) {
      return _value.substr(0, limit) + '...';
    }
    return _value;
  }
}
