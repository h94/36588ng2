//Angular
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
//Other Liberiary
import { Subject } from 'rxjs';

@Injectable()
export class GlobalService {
    /**
	 * 是否顯示login頁面 ，default value=true
	 */
	private showLogin : boolean = true;
    constructor(private router: Router) {}

    /**
     * 跳轉頁面
     * @param pageName 要跳轉的頁面
     */
    goPage(pageName: string[]) {
        this.router.navigate(pageName);
    }
    	/**
	*	設定 showLogin 值
	*/
	setShowLogin(_showLogin: boolean): void {
		this.showLogin = _showLogin;
	}
    	/**
	*取得 showLogin 值
  	*/
	getShowLogin(): boolean {
		return this.showLogin;
	}
}