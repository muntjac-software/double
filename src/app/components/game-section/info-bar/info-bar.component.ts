import {Component, Input} from '@angular/core';
import {GameService} from "../../../services/game.service";

@Component({
  selector: 'info-bar',
  templateUrl: './info-bar.component.html',
  styleUrls: ['./info-bar.component.scss']
})
export class InfoBarComponent {

  @Input() menuExpanded: boolean = false;

  date: string = new Date().toDateString();
  mValue: number;
  cValue: number;
  xValues: number[];

  constructor(gameService: GameService) {
    this.mValue = gameService.generateMValue();
    this.cValue = gameService.generateCValue();
    this.xValues = gameService.generateXValues();
  }

}
