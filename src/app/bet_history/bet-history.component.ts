import { Component, OnInit } from '@angular/core';
import { ApiService } from 'service';
@Component({
    selector: 'bet-history-page',
    templateUrl: 'bet-history.component.html'
})
//历史帐务
export class BetHistoryComponent implements OnInit {
    constructor(private api: ApiService) { }
    ngOnInit() {

    }
}