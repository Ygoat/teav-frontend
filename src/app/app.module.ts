import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './pages/landing/landing.component';
import { TopMenuComponent } from './top/top.component';
import { NavBarComponent } from './utils/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    TopMenuComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path:'',component: LandingComponent},
      { path:'top',component: TopMenuComponent},
      { path:'navbar',component: NavBarComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
