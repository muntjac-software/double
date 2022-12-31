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
    let content = '🧠 🧮 🗡️ :: [RECRUIT] [🟢🟢🟢🟢🟢🟢🟢] [5s]';
    if (window.isSecureContext && navigator.clipboard) {
      navigator.clipboard.writeText(content).then();
    } else {
      this.unsecuredCopyToClipboard(content);
    }

  }

  // NEXT TODO: just confirm that things are fine git-wise:
  // that DEPLOY HAS THE RIGHT code
  // DBLE-25 has the right code too
  // THEN START CLEANING AND TESTING this mf...

  private unsecuredCopyToClipboard(content: string) { // TODO: temp hack to bypass !HTTPS on double.muntjac.io
    const textArea = document.createElement("textarea");
    textArea.value = content;
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
      console.log('Using deprecated copy function');
    } catch(err) {
      console.error('Unable to copy to clipboard',err)
    }

    document.body.removeChild(textArea);
  }
  // https://stackoverflow.com/questions/71873824/copy-text-to-clipboard-cannot-read-properties-of-undefined-reading-writetext

}
