//Module
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Service
import { AuthGuard } from 'service';
//Main Component
import { LoginComponent } from './_login/login.component';
import { GameTableComponent } from './game_table/game-table.component';

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
    }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes, { useHash: true }) ],
    exports: [RouterModule]
})
export class AppRoutingModule {}