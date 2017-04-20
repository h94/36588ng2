import { Component } from '@angular/core';
@Component({
	selector: 'my-app',
	templateUrl: 'app.component.html'
})
export class AppComponent {
	public ifUid:boolean=false;
	constructor() {}
	ngOnInit() {
		if (sessionStorage.getItem('uid')) {
			this.ifUid = true;
		}
    }
}