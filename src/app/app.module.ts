import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { MainFeedComponent } from './main-feed/main-feed.component';
import { StaffDetailComponent } from './staff-detail/staff-detail.component';
import { StaffCreateComponent } from './staff-create/staff-create.component';
import { MainSidebarComponent } from './main-sidebar/main-sidebar.component';
import {WikiService} from "./service/wiki.service";
import { StaffBlaComponent } from './staff-bla/staff-bla.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    MainFeedComponent,
    StaffDetailComponent,
    StaffCreateComponent,
    MainSidebarComponent,
    StaffBlaComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: MainFeedComponent },
      { path: 'detail/:staffId', component: StaffDetailComponent },
      { path: 'create', component: StaffCreateComponent },
    ])
  ],
  providers: [MainFeedComponent, WikiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
