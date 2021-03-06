import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { GlobalService } from 'service/global.service';
@Injectable()
//sid驗證服務
export class AuthGuard implements CanActivate {
	constructor(private router: Router, private globals: GlobalService) { }

	canActivate() {

		if (sessionStorage.getItem('uid')) {
			return true;
		}
		alert('請輸入帳密');
		this.router.navigate(['login']);
		return false;
	}
}