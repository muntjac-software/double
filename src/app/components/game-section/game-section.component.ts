import {Component, Input, OnInit} from '@angular/core';
import {GameService} from "../../services/game.service";

@Component({
  selector: 'game-section',
  templateUrl: './game-section.component.html',
  styleUrls: ['./game-section.component.scss']
})
export class GameSectionComponent implements OnInit{

  @Input() menuExpanded: boolean = false;

  mValue: number = 1;
  cValue: number = 1;
  xValues: number[] = [];

  constructor(gameService: GameService) {
    this.mValue = gameService.generateMValue();
    this.cValue = gameService.generateCValue();
    this.xValues = gameService.generateXValues();

  }

  ngOnInit(): void {

  }

}
