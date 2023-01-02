import {Component, Input} from '@angular/core';
import {faCircleInfo, faCog, faSkullCrossbones} from "@fortawesome/free-solid-svg-icons";
import {Difficulty} from '../../models/difficulty';
import {environment} from "../../../environments/environment";

@Component({
  selector: 'menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent {

  @Input() menuExpanded: boolean = false;

  iconInfo = faCircleInfo;
  iconSettings = faCog;
  iconDeath = faSkullCrossbones;

  difficulty = Difficulty;
  thisDifficulty: Difficulty = Difficulty.RECRUIT;

  difficultyInfo = environment.difficultyInfo;
  difficulties = environment.difficulties;

  switchDifficulty(newDifficulty: number): void {
    // TODO: extract difficulty functionality to game.service.ts or a new difficulty/settings svc

    this.thisDifficulty = newDifficulty;
  }

}
