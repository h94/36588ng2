import { Component, OnInit } from '@angular/core';
import { GlobalService, ApiService } from 'service';
import { Observable } from 'rxjs';

@Component({
    selector: 'header-toolbar',
    templateUrl: 'header.component.html'
})
/**
 * 主頁面上的 header
 */
export class HeaderComponent implements OnInit {

        /**
     * 現在時間
     */
    public nowTime : string = "";
    constructor(private globals: GlobalService, private api: ApiService) { }
    changePage(name: string[]) {
        this.globals.goPage(name);
	}
    ngOnInit() {
        this.nowTime = new Date().toString();
     Observable.interval(1000).subscribe( () => this.nowTime = new Date().toString() );

    }
 
}