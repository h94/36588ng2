import { Component, OnInit } from '@angular/core';
import { ApiService, GlobalService } from 'service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'game-table',
    templateUrl: 'game-table.component.html'
})

//賽事列表、賠率表 及 下注  By. Ian
export class GameTableComponent implements OnInit{
    constructor() {}

    ngOnInit() {

    }

}