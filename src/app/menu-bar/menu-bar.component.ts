import {Component, EventEmitter, Input, Output} from '@angular/core';
import {faCircleInfo, faCog} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent {

  @Input() menuExpanded: boolean = false;

  iconInfo = faCircleInfo;
  iconSettings = faCog;

}
