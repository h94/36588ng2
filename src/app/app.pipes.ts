import { Pipe, PipeTransform } from '@angular/core';

/**
 * 過濾所有賽事，以日期分類 或 以聯盟分類 (彈性Pipe) (game-table-component.html) By. Ian
 */
@Pipe({name: 'classifyGameList'})
export class classifyGameListPipe implements PipeTransform {
    //value(所有賽事)、key(所有賽事的key值)、vol(比對的根據)
    transform(value: any, key: string, vol: string): any {
        let res = value.filter((item) => {
            return item[key] == vol;     //如果日期相同才納入陣列
        });
        return res;
    }
}