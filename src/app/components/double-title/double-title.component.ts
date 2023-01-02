import { Component, Input } from '@angular/core';

@Component({
  selector: 'double-title',
  templateUrl: './double-title.component.html',
  styleUrls: ['./double-title.component.scss']
})
export class DoubleTitleComponent {

  @Input() title: string = 'double';
  @Input() menuExpanded: boolean = false;
  @Input() menuClosed: boolean = false;

}
