//Angular
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Headers, RequestOptions } from '@angular/http';
//Other Liberiary
import { Observable } from 'rxjs';
//config.js
import { SharedData } from 'lib/config';
//Interface
import { APIResponse } from 'lib/IResponse';

@Injectable()
export class ApiService {
	constructor(private http: Http) {

	}
	/**錯誤代碼列表 */
	private errMsg: any = {};

	/**
	 * API HTTP Request
	 * @param _code gateway接口
	 * @param _data request參數
	 */
	postServer(_code: number, _data: any): Observable<APIResponse> {
		let url = SharedData.gateway;
		let body = this.formatPostBody({
			cmd: JSON.stringify({
				cmd: _code,
				parame: _data //parame
			})
		});
		let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;' });
		let options = new RequestOptions({ headers: headers });
		return this.http
			.post(url, body, options)
			.retry(2)
			.timeout(30000)
			.map((postRes) => {
				let res: APIResponse = eval('(' + postRes["_body"] + ')');
				return res || {};
			})
			.catch((error) => Observable.throw(error.json().error || 'Server error'));
	}
	private formatPostBody(_data: any) {
		let formatData = '';
		let count = 0;
		for (let i in _data) {
			if (count === 0) { formatData += i + '=' + _data[i]; }
			else { formatData += '&' + i + '=' + _data[i]; }
			count++;
		}
		return formatData;
	}



}