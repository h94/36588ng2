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
	private showLogin: boolean = false;
	/**
	 * 會員資料
	 */
	public memberData: any = {};
	/**
	 * 語系181
	 */
	public langData: object = {};
	constructor(private router: Router) { }

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
	/**
 * 設定會員資料 By. Ian
 */
	setMemberData(_memberData) {
		this.memberData = _memberData;
	}
	getMemberData(): string {
		return this.memberData;
	}
	/**
	 * 給語系181
	 * @param _langData 資料物件
	 */
	setlangData(_langData) {
		
		this.langData = _langData;
	}
	/**
	 * 拿語系
	 */
	getlangData(): object {
		return this.langData;

	}
}