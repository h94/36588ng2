import { Component, OnInit } from '@angular/core';
import { GlobalService, ApiService } from 'service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Component({
    selector: 'nav-toolbar',
    templateUrl: 'nav.component.html'
})
/**
 * 主頁面上的 header
 */
export class NavComponent implements OnInit {
    public username: string = '';

    public maxcredit: string = '';

    public navgtype: any = { "FT": { "ALL": "0", "RE": "0" }, "BK": { "ALL": "0", "RE": "0" }, "WB": { "ALL": "0", "RE": "0" }, "BS": { "ALL": "0", "RE": "0" }, "JB": { "ALL": "0", "RE": "0" }, "CB": { "ALL": "0", "RE": "0" }, "KB": { "ALL": "0", "RE": "0" }, "AF": { "ALL": "0", "RE": "0" }, "IB": { "ALL": "0", "RE": "0" }, "LO": { "ALL": "0", "RE": "0" }, "ST": { "ALL": "0", "RE": "0" }, "GT": { "ALL": "0", "RE": "0" }, "EF": { "ALL": "0", "RE": "0" }, "EK": { "ALL": "0", "RE": "0" }, "EB": { "ALL": "0", "RE": "0" }, "TN": { "ALL": "0", "RE": "0" }, "PO": { "ALL": "0", "RE": "0" }, "VB": { "ALL": "0", "RE": "0" }, "HB": { "ALL": "0", "RE": "0" }, "BL": { "ALL": "0", "RE": "0" }, "GD": { "ALL": "0", "RE": "0" } };
    constructor(private globals: GlobalService, private api: ApiService, private router: Router) { }

    logout() {
        this.globals.setShowLogin(false);
        sessionStorage.clear();
        location.reload();

    }
    ngOnInit() {

        let Sendata = { uid: sessionStorage.getItem('uid') };
        this.api.postServer(400, Sendata).subscribe(res => {
            this.maxcredit = res.ret.maxcredit;
            this.username = res.ret.username;
            this.globals.setMemberData(res.ret.conf);
            console.log(res.ret);
        })
        let navdata = { uid: sessionStorage.getItem('uid') };
        this.api.postServer(153, navdata).subscribe(res => {
            this.navgtype =res.ret;
            console.log(this.navgtype);
        })

    }

}