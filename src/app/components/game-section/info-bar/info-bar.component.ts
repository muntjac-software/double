import { Component, Input } from '@angular/core';
import { faCopy } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'info-bar',
  templateUrl: './info-bar.component.html',
  styleUrls: ['./info-bar.component.scss']
})
export class InfoBarComponent {

  @Input() menuExpanded: boolean = false;
  @Input() mValue: number = 1;
  @Input() cValue: number = 1;
  @Input() xValues: number[] = [];

  date: string = new Date().toDateString();

  iconCopy = faCopy;

  copyResult() {
    navigator.clipboard.writeText('a game to keep your 🧠 🧮 🗡️').then();
  }

}
