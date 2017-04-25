import { Component, OnInit } from '@angular/core';
import { GlobalService, ApiService } from 'service';
@Component({
    selector: 'member-page',
    templateUrl: 'member.component.html'
})
//賽事結果
export class MemberComponent implements OnInit {
    constructor(private globals: GlobalService,private api: ApiService) { }
    /**
     * 會員資料
     */
    public memberData: any = {};
      ngOnInit() {
       this.memberData=this.globals.getMemberData();
       console.log(this.memberData);
    }
}