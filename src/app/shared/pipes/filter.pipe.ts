import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(value: any, filterString: string, filterByProperty: string): any {
    const _value = value;
    const filtered = [];

    if (_value.length === 0 || filterString === '' || filterByProperty === '') {
      return _value;
    }
    for (const item of _value) {
      if (item[filterByProperty] === filterString) {
        filtered.push(item);
      }
    }
    return filtered;
  }
}
