import {Component, Input} from '@angular/core';

@Component({
  selector: 'menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent {

  @Input() menuExpanded: boolean = false;

}
