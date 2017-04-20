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

    
    constructor(private globals: GlobalService, private api: ApiService) { }

    logout(){
        this.globals.setShowLogin(false);
        sessionStorage.clear();
        location.reload();

    }
    ngOnInit() {
    

    }
 
}