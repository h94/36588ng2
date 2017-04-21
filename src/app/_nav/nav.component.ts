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

    constructor(private globals: GlobalService, private api: ApiService,private router: Router) { }

    logout(){
        this.globals.setShowLogin(false);
        sessionStorage.clear();
        location.reload();

    }
    ngOnInit() {


    }

}