import { Component, OnInit } from '@angular/core';
import { ApiService, GlobalService } from 'service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';


@Component({
    selector: 'game-table',
    templateUrl: 'game-table.component.html'
})

//賽事列表、賠率表 及 下注  By. Ian
export class GameTableComponent implements OnInit {

    /**
     * 球種
     */
    public gtype: string = '';
    private DataRE: object = {};
    private DataR: object = {};
    private DataHR: object = {};
    private langData:object ={};

    constructor(private Global: GlobalService,private router: ActivatedRoute, private api: ApiService) { }

    get430() {
        let score = { "uid": sessionStorage.getItem('uid'), "gtype": this.gtype };
        this.api.postServer(430, score).subscribe(res => {
            console.log(res.ret);
        });
    }
    get100RE() {
        let score = { "uid": sessionStorage.getItem('uid'), "gtype": this.gtype, "rtype": 'RE' };
        this.api.postServer(100, score).subscribe(res => {
            this.DataRE = res.ret;
            console.log('100RE>',res.ret);
        });
    }
    get100R() {
        let score = { "uid": sessionStorage.getItem('uid'), "gtype": this.gtype, "rtype": 'R' };
        this.api.postServer(100, score).subscribe(res => {
            this.DataR = res.ret;
            console.log('100R>',res.ret);
        });
    }

    get100HR() {
        let score = { "uid": sessionStorage.getItem('uid'), "gtype": this.gtype, "rtype": 'HR' };
        this.api.postServer(100, score).subscribe(res => {
            this.DataHR = res.ret;
            console.log('100HR>',res.ret);
        });
    }
    updata() {
        console.log('gtype>',this.gtype);
        console.log('URL>',sessionStorage.getItem('uid'));
        this.get430();
        this.get100RE();
        this.get100R();
        this.get100HR();
        this.langData = this.Global.getlangData();
        console.log('語系>',this.langData);
    }

    ngOnInit() {

        this.router.params.subscribe(params => {
            this.gtype = params['gtype'];
            this.updata();
        });

    }

}