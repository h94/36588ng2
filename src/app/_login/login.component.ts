import { Component, OnInit } from '@angular/core';
import { GlobalService, ApiService } from 'service';
import { Router } from '@angular/router';
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

    constructor(private globals: GlobalService, private api: ApiService,private router: Router) { }

    login() {

        let Send ={sAcc:this.username,sPwd:this.password}; 
        this.api.postServer(999,Send).subscribe(res => {
            let data = res.ret[1];
            if(data){
                if (this.isRemember) {
                    localStorage.setItem('username', this.username);
                    localStorage.setItem('password', this.password);
                } else {
                    localStorage.removeItem('username');
                    localStorage.removeItem('password');
                }
                sessionStorage.setItem('uid', data);
                this.globals.setShowLogin(true);
                location.reload();
            }
            if(res.ret[0] == '-1'){
                alert('帳密錯誤');
            }
            console.log(res);
        })

    }
     ngOnInit() {
        if(sessionStorage.getItem('uid')){
            this.router.navigate(['GameTable']);
        }
        if (localStorage.getItem('username') && localStorage.getItem('password')) {
            this.username=localStorage.getItem('username');
            this.password=localStorage.getItem('password');
        } else {
            this.username='';
            this.password='';
        }
    }
  
}