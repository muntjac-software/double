import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private mRange: number = 10;
  private cRange: number = 10;
  private xRange: number = 20;

  constructor() { }

  generateMValue(): number {
    return this.getRandomInt(this.mRange);
  }

  generateCValue(): number {
    return this.getRandomInt(this.cRange);
  }

  generateXValues(): number[] {
    let xValues = [];
    while (xValues.length < 7) {
      xValues.push(this.getRandomInt(this.xRange));
    }

    return xValues;
  }

  generatePotentialAnswers(m: number, c: number, x: number): number[] {
    let potentialAnswers = []
    let answersRequired = 5 - 1 // TODO: extract answers required

    let answerActual = m * x + c;
    potentialAnswers.push(answerActual)

    for (let i = 0; i < answersRequired; i++) {
      let answerPotential = answerActual += this.getRandomInt(20); // TODO: extract random answer spread
      potentialAnswers.push(answerPotential); // FixMe: naming?
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

}
