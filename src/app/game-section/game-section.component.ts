import {Component, Input} from '@angular/core';

@Component({
  selector: 'game-section',
  templateUrl: './game-section.component.html',
  styleUrls: ['./game-section.component.scss']
})
export class GameSectionComponent {

  @Input() menuExpanded: boolean = false;

}
