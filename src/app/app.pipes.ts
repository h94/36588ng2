import { Pipe, PipeTransform } from '@angular/core';

/**
 * 過濾所有賽事，以日期分類 或 以聯盟分類 (彈性Pipe) (game-table-component.html) By. Ian
 */
@Pipe({name: 'keys'})
export class KeysPipe implements PipeTransform {
  transform(value, args:string[]) : any {
    let keys = [];
    for (let key in value) {
      keys.push({key: key, value: value[key]});
    }
    return keys;
  }
}