import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { GameSectionComponent } from './components/game-section/game-section.component';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import {GameService} from "./services/game.service";

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    GameSectionComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [
    GameService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
