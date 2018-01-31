import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { DashBoardComponent } from './pages/dash-board/dash-board.component';
import { HeaderComponent } from './pages/header/header.component';
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { FooterComponent } from './pages/footer/footer.component';
import { LayoutComponent } from './pages/layout/layout.component';
 
import {  AppRoutingModule } from './app.routing'

@NgModule({
  declarations: [
     AppComponent,
    HomePageComponent,
    DashBoardComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    LayoutComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
