import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './pages/landing/landing.component';
import { TopMenuComponent } from './pages/top/top.component';
import { NavBarComponent } from './pages/utils/navbar/navbar.component';
import { MenubarComponent } from './pages/utils/menubar/menubar.component';
import { MembersComponent } from './pages/members/members.component';
import { MemberListComponent } from './pages/members/member-list/member-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    TopMenuComponent,
    NavBarComponent,
    MenubarComponent,
    MembersComponent,
    MemberListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path:'',component: LandingComponent},
      { path:'top',component: TopMenuComponent},
      { path:'navbar',component: NavBarComponent},
      { path:'members',component: MembersComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
