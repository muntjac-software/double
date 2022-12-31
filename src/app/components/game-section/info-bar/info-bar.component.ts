import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { Subscription } from "rxjs";
import { MessageService } from "../../../services/message.service";

@Component({
  selector: 'info-bar',
  templateUrl: './info-bar.component.html',
  styleUrls: ['./info-bar.component.scss']
})
export class InfoBarComponent implements OnDestroy {

  @Input() menuExpanded: boolean = false;
  @Input() mValue: number = 1;
  @Input() cValue: number = 1;
  @Input() xValues: number[] = [];

  date: string = new Date().toDateString();
  gameOver: boolean = false;

  iconCopy = faCopy;

  private subscription$: Subscription;
  private messageService: MessageService;

  constructor(messageService: MessageService) {
    this.messageService = messageService;

    this.subscription$ = this.messageService
      .getData()
      .subscribe((data: any) => { this.gameOver = data })

  }

  public ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }

  copyResult() {
    navigator.clipboard.writeText(' 🧠 🧮 🗡️ :: [RECRUIT] [🟢🟢🟢🟢🟢🟢🟢] [5s]').then();
  }

}
