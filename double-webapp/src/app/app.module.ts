import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { SideBarComponent } from "./side-bar/side-bar.component";

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  exports: [
    SideBarComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
