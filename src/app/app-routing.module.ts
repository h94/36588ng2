//Module
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Service
import { AuthGuard } from 'service';
//Main Component
import { LoginComponent } from './_login/login.component';
import { GameTableComponent } from './game_table/game-table.component';
import { BetDetailComponent } from './bet_detail/bet-detail.component';
import { BetHistoryComponent } from './bet_history/bet-history.component'
import { SystemRelatedComponent } from './system_related/system-related.component';
import { MemberComponent } from'./_member/member.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
	{
		path: 'login',			
		component: LoginComponent
	},
    {
        path: 'GameTable',  
        component: GameTableComponent,
		canActivate: [AuthGuard]
    },
	{
		path: 'betdetail',			//下注明細
		component: BetDetailComponent,
		canActivate: [AuthGuard]
	},
	{
		path: 'bethistory',			// 歷史帳務
		component: BetHistoryComponent,
		canActivate: [AuthGuard]
	},
    {
		path: 'systemreated',  	//系統相關
		component: SystemRelatedComponent,
		canActivate: [AuthGuard]
	} ,
	{
		path: 'member',  	//會員中心
		component: MemberComponent,
		canActivate: [AuthGuard]
	}
];

@NgModule({
    imports: [ RouterModule.forRoot(routes, { useHash: true }) ],
    exports: [RouterModule]
})
export class AppRoutingModule {}