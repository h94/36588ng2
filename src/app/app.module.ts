//Modules
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
//Service
import { ApiService, AuthGuard, GlobalService } from 'service';
//Common Component
import { AppComponent } from './app.component';
import { FooterComponent } from './_footer/footer.component';
//Main Component
import { HeaderComponent } from './_header/header.component';
import { NavComponent } from './_nav/nav.component';
import { GameTableComponent } from './game_table/game-table.component';
import { LoginComponent } from './_login/login.component';
import { BetDetailComponent } from './bet_detail/bet-detail.component';
import { BetHistoryComponent } from './bet_history/bet-history.component'
import { BetHistoryDetailComponent } from './bet_history/bet_history_detail/bet-history-detail.component';
import { SystemRelatedComponent } from './system_related/system-related.component';
import { MemberComponent } from './_member/member.component';
//Pipes
import { KeysPipe } from './app.pipes';

@NgModule({
    imports: [
        BrowserModule, HttpModule, AppRoutingModule, BrowserAnimationsModule, FormsModule
    ],
    bootstrap: [
        AppComponent
    ],
    declarations: [
        LoginComponent,
        AppComponent,
        FooterComponent,
        HeaderComponent,
        NavComponent,
        GameTableComponent,
        BetDetailComponent,
        BetHistoryComponent, 
        BetHistoryDetailComponent, 
        SystemRelatedComponent, 
        MemberComponent,
        KeysPipe
    ],
    providers: [
        ApiService, AuthGuard, GlobalService
    ],
})
export class AppModule { }