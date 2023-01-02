import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {LoggerService} from "./logger.service";

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  private log: LoggerService = new LoggerService();

  public copy() {
    let content = environment.resultSuccess;

    if (window.isSecureContext && navigator.clipboard) {
      navigator.clipboard.writeText(content).then();

    } else {
      this.unsecuredCopyToClipboard(content);

    }
  }

  private unsecuredCopyToClipboard(content: string) { // TODO: temp hack to bypass !HTTPS on double.muntjac.io
    // https://stackoverflow.com/questions/71873824/copy-text-to-clipboard-cannot-read-properties-of-undefined-reading-writetext

    const textArea = document.createElement("textarea");
    textArea.value = content;

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      document.execCommand('copy');
      this.log.debug('ResultService', 'unsecuredCopyToClipboard', 'Using deprecated copy function'); // TODO: add logging!

    } catch(err) {
      this.log.debug('ResultService', 'unsecuredCopyToClipboard', 'Unable to copy to clipboard: ' + err); // TODO: add logging!
    }

    document.body.removeChild(textArea);
  }

}
