import { Component, OnInit } from '@angular/core';
import { ApiService } from 'service';
@Component({
    selector: 'bet-detail-page',
    templateUrl: 'bet-detail.component.html'
})
//下注明細
export class BetDetailComponent implements OnInit {
    constructor(private api: ApiService) { }
     ngOnInit() {
    }

}