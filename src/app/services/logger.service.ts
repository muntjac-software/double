import { Injectable } from '@angular/core';
import { LogLevel } from "../models/log-level";

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  private readonly level = LogLevel.DEBUG; // TODO: extract to env.local.ts, env.prod.ts...

  // TODO: sort this service out properly
  constructor() { }

  public levelEnabled(level: number): boolean {
    return this.level >= level;
  }

  /**
   * DEBUG :: Used for development and testing
   */
  debug(className: string, functionName: string, message: string): void { // TODO: className in the constructor
    if (this.levelEnabled(LogLevel.DEBUG)) {
      this.log(`[${className}::${functionName}] ${message}`, LogLevel.DEBUG);
    }
    // NOTE: be sure that dev console has permitted debug ("verbose") logging
  }

  private log(content: string, level: any): void {
    let now = Date();

    let msg = `[${now}] ${LogLevel[level]} :: ${content}`;

    switch(level) { // TODO: alternative to switch?
      case LogLevel.DEBUG:
        console.debug(msg);
        break;
      default:
        console.log(msg);
    }

  }

}
