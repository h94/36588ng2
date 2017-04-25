import { Component, OnInit } from '@angular/core';
import { ApiService, GlobalService } from 'service';
import { SharedData } from 'lib/config';
@Component({
	selector: 'my-app',
	templateUrl: 'app.component.html'
})
export class AppComponent {
	public ifUid: boolean = false;

	public langData: object = { league: { AF: {}, BK: {}, BL: {}, BS: {}, CB: {}, EB: {}, EF: {}, EK: {}, FT: {}, GD: {}, GT: {}, HB: {}, IB: {}, JB: {}, KB: {}, LO: {}, PO: {}, ST: {}, TN: {}, VB: {}, WB: {} }, team: { AF: "", BK: "", BL: "", BS: "", CB: "", EB: "", EF: "", EK: "", FT: "", GD: "", GT: "", HB: "", IB: "", JB: "", KB: "", LO: "", PO: "", ST: "", TN: "", VB: "", WB: "" } }; //編號對照表(聯盟,隊伍)

	constructor(private Global: GlobalService, private api: ApiService) { }
	ngOnInit() {
		if (sessionStorage.getItem('uid')) {
			this.ifUid = true;
			let map = { "uid": sessionStorage.getItem('uid'), "lang": SharedData.lang };
			this.api.postServer(181, map).subscribe(res => {
				this.langData = res.ret;
				this.Global.setlangData(this.langData);
			});
		}
	}
}