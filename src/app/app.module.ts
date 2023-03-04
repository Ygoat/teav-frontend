import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './pages/landing/landing.component';
import { TopMenuComponent } from './pages/top/top.component';
import { NavBarComponent } from './utils/navbar/navbar.component';
import { MenubarComponent } from './utils/menubar/menubar.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    TopMenuComponent,
    NavBarComponent,
    MenubarComponent
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
