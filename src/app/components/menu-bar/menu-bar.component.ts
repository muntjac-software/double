import { Component, Input } from '@angular/core';
import { faCircleInfo, faCog, faSkullCrossbones } from "@fortawesome/free-solid-svg-icons";
import { Difficulty } from '../models/difficulty';

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

  _difficulty: Difficulty;
  difficultyInfo: string;
  difficultyInfos = [ // TODO: sort properly...
    'For those new to -le games',
    'For regular -le game players',
    'For those who spend too long on -le games',
    'You will not survive'
  ]



  constructor() {
    this._difficulty = Difficulty.RECRUIT; // TODO: tdd and extract to service?
    this.difficultyInfo = 'For those new to -le games'; // TODO: sort properly...
  }

  get difficulty() {
    return this._difficulty;
  }

  set difficulty(difficulty: Difficulty) {
    this._difficulty = difficulty;

    this.difficultyInfo = this.difficultyInfos[difficulty];
  }

}
