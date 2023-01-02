import { Component, Input, OnDestroy } from '@angular/core';
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { Subscription } from "rxjs";
import { MessageService } from "../../../services/message.service";
import {environment} from "../../../../environments/environment";
import {ResultService} from "../../../services/result.service";

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
  successMsg = environment.messageSuccess;

  iconCopy = faCopy;

  resultService: ResultService;

  private subscription$: Subscription;
  private messageService: MessageService;

  constructor(messageService: MessageService, resultService: ResultService) {
    this.messageService = messageService;
    this.resultService = resultService;

    this.subscription$ = this.messageService
      .getData()
      .subscribe((data: any) => { this.gameOver = data });
  }

  ngOnDestroy(): void { // TODO: consider using `| async` pipe
    this.subscription$.unsubscribe();
  }

  get equation(): string {
    return `Y = ${this.mValue}X + ${this.cValue}`;
  }

}
