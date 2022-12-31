import { Injectable } from '@angular/core';
import { MessageService } from "./message.service";

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private mRange: number = 10;
  private cRange: number = 10;
  private xRange: number = 20;

  private potentialAnswersSet: Set<number> = new Set();

  private messageService: MessageService;

  constructor(messageService: MessageService) {
    this.messageService = messageService;
  }

  generateMValue(): number {
    return this.getRandomInt(this.mRange);
  }

  generateCValue(): number {
    return this.getRandomInt(this.cRange);
  }

  generateXValues(): number[] {
    let xValues: number[] = [];
    while (xValues.length < 7) {
      let candidate = this.getRandomInt(this.xRange);

      if (!xValues.includes(candidate)) {
        xValues.push(candidate);
      }
    }

    return xValues;
  }

  generatePotentialAnswers(m: number, c: number, x: number): number[] {
    let potentialAnswers = []
    let answersRequired = 5 // TODO: extract answers required

    let answerActual = m * x + c;
    potentialAnswers.push(answerActual)

    while (potentialAnswers.length < answersRequired) {
      let candidate = answerActual += this.getRandomInt(20); // TODO: extract random answer spread

      if (!this.potentialAnswersSet.has(candidate)) { // FixMe: not working properly - duplicates slipping through
        potentialAnswers.push(candidate); // FixMe: naming?
        this.potentialAnswersSet.add(candidate);
      }
      // TODO: 'test' for duplicates
    }

    return this.shuffle(potentialAnswers);
  }

  private shuffle(array: number[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
    // https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  }

  private getRandomInt(range: number) {
    let sign = Math.random() < 0.5 ? -1 : 1;
    let naturalNumber = Math.floor(Math.random() * range) + 1;

    return (naturalNumber) * sign;
  }

  public setGameOver(playerWon: boolean) {
    // TODO: NEXT!
    // TODO: how to propagate to the info bar so we can display that share result msg...
    this.messageService.sendMessage(playerWon); // Question: define message structure in a model somewhere? https://balramchavan.medium.com/angular-event-broker-service-communication-between-components-fba190ce0bd5
  }

}
