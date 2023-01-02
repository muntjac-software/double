import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { GameSectionComponent } from './components/game-section/game-section.component';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { GameService } from "./services/game.service";
import { InfoBarComponent } from "./components/game-section/info-bar/info-bar.component";
import { ClusterComponent } from './components/game-section/cluster/cluster.component';
import { SystemComponent } from './components/game-section/cluster/system/system.component';
import { PlanetComponent } from "./components/game-section/cluster/system/planet/planet.component";
import { MatButtonModule } from "@angular/material/button";
import { MessageService } from "./services/message.service";
import { DoubleTitleComponent } from './components/double-title/double-title.component';
import {ResultService} from "./services/result.service";
import {LoggerService} from "./services/logger.service";

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    GameSectionComponent,
    InfoBarComponent,
    ClusterComponent,
    SystemComponent,
    PlanetComponent,
    DoubleTitleComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FontAwesomeModule,
    MatButtonModule
  ],
  providers: [
    GameService,
    LoggerService,
    MessageService,
    ResultService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
