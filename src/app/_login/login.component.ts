import { Component, OnInit } from '@angular/core';
import { GlobalService, ApiService } from 'service';
@Component({
    selector: 'login',
    templateUrl: 'login.component.html'
})
/**
 * 主頁header 呼叫  登入 登出 的form
 */
export class LoginComponent implements OnInit {


    /**
	 * 帳號
	 */
    public username: string = '';
	/**
	 * 密碼
	 */
    public password: string = '';
    public isRemember: boolean = false;

    constructor(private globals: GlobalService, private api: ApiService) { }

    login() {

        let Send ={sAcc:this.username,sPwd:this.password}; 
        this.api.postServer(999,Send).subscribe(res => {
            let data = res.ret[1];
            if(data){
                sessionStorage.setItem('uid', data);
                this.globals.setShowLogin(false);
            }
            console.log(res);
        })

    }
     ngOnInit() {

    }
  
}