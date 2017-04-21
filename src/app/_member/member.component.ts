import { Component, OnInit } from '@angular/core';
import { ApiService } from 'service';

@Component({
    selector: 'member-page',
    templateUrl: 'member.component.html'
})
//賽事結果
export class MemberComponent implements OnInit {
    constructor(private api: ApiService) { }

      ngOnInit() {

    }
}