import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './pages/landing/landing.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { NavBarComponent } from './pages/utils/navbar/navbar.component';
import { MenubarComponent } from './pages/utils/menubar/menubar.component';
import { MembersComponent } from './pages/members/members.component';
import { MemberListComponent } from './pages/members/member-list/member-list.component';
import { ProjectsListComponent } from './pages/projects/projects-list/projects-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    ProjectsComponent,
    NavBarComponent,
    MenubarComponent,
    MembersComponent,
    MemberListComponent,
    ProjectsListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forChild([{path:'projects-list',component: ProjectsListComponent}]),
    RouterModule.forRoot([
      { path:'',component: LandingComponent},
      { path:'projects',component: ProjectsComponent},
      { path:'navbar',component: NavBarComponent},
      { path:'members',component: MembersComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
