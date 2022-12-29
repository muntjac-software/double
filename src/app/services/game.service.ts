import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private mRange: number = 10;
  private cRange: number = 10;
  private xRange: number = 20;

  constructor() { }

  generateMValue() {
    return this.getRandomInt(this.mRange);
  }

  generateCValue() {
    return this.getRandomInt(this.cRange);
  }

  generateXValues() {
    let xValues = [];
    while (xValues.length < 7) {
      xValues.push(this.getRandomInt(this.xRange));
    }

    return xValues;
  }

  private getRandomInt(range: number) {
    return Math.floor(Math.random() * range) + 1;
  }

}
