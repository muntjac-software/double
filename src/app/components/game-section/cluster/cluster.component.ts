import {Component, Input, OnInit, Output, ViewChild} from '@angular/core';
import { GameService } from "../../../services/game.service";

@Component({
  selector: 'cluster',
  templateUrl: './cluster.component.svg',
  styleUrls: ['./cluster.component.scss']
})
export class ClusterComponent implements OnInit {

  @Input() menuExpanded: boolean = false;
  @Input() mValue: number = 1;
  @Input() cValue: number = 1;
  @Input() xValues: number[] = [];

  selectedAnswers: {x: number, y: number}[] = [];

  gameService: GameService;

  constructor(gameService: GameService) {
    this.gameService = gameService;
  }

  ngOnInit(): void {
    this.generateSystems();

    const answers = document.getElementById('answers')?.children!;
    for (let i = 0; i < answers.length; i++) {
      const answer = answers[i];
      answer.addEventListener('click', (e: Event) => {
        let info = answer.getAttribute('id')!.split(',');
        let xValue = parseInt(info[0]);
        let yValue = parseInt(info[1]);

        this.setAnswer(xValue, yValue, answer.getAttribute('id')!);
      });
    }
  }

  private generateSystems() {
    // generate 7 random points
    // assign an x-value
    // draw on the screen
    // set up demo
    let svgWidth = document.getElementById('cluster')!.clientWidth;
    let svgHeight = document.getElementById('cluster')!.clientHeight;

    // TODO: add logging to the application

    let n = 7;
    let points = new Array(n);

    // reset SVG
    document.getElementById('cluster')!.setAttribute('viewBox', '0 0 ' + svgWidth + ' ' + svgHeight);

    let centers = [
      {x: 150 + this.generateOffset(), y: 150 + this.generateOffset()},
      {x: 400 + this.generateOffset(), y: 150 + this.generateOffset()},
      {x: 700 + this.generateOffset(), y: 150 + this.generateOffset()},
      {x: 950 + this.generateOffset(), y: 150 + this.generateOffset()},
      {x: 250 + this.generateOffset(), y: 450 + this.generateOffset()},
      {x: 550 + this.generateOffset(), y: 450 + this.generateOffset()},
      {x: 850 + this.generateOffset(), y: 450 + this.generateOffset()}
    ];

    // set up points
    for (let i = 0; i < n; i++) {
      points[i] = centers[i];
      // this.generateRandomPoint(svgWidth, svgHeight);
      points[i].id = i + 1;

      let potentialAnswers = this.gameService.generatePotentialAnswers(this.mValue, this.cValue, this.xValues[i]);
      this.drawSystem(points[i].x, points[i].y, this.xValues[i], potentialAnswers);
    }


    let equation = document.createElementNS("http://www.w3.org/2000/svg", 'text');
    equation.setAttribute('x', `${svgWidth / 2 - 50}`);
    equation.setAttribute('y', `${35}`);
    equation.setAttribute('font-size', '1.5rem');
    equation.setAttribute('fill', '#ccc');
    equation.innerHTML = `Y = ${this.mValue}X + ${this.cValue}`;

    document.getElementById('points')!.appendChild(equation);

  }

  private generateOffset() {
    return (Math.random() < 0.5 ? -1 : 1) * Math.random() * 30;
  }

  // @ts-ignore
  private generateRandomPoint(w: number, h: number) {
    let x, y;
    let xList: number[] = [];
    let yList: number[] = [];
    let condition = true;

    while (condition) {
      x = (Math.random() - 0.5) * 0.95;
      x = Math.floor((x + 0.5) * w);
      y = (Math.random() - 0.5) * 0.95;
      y = Math.floor((y + 0.5) * h);
      let candidate = {x: x, y: y};

      // TODO: block off the available space, +- 100-120px from the x & y
      // Something like:
      /*
      divide up the screen into 7 segments (each needs 240px by 240px)

      1100 by 670... set min screen width to more or less full mac screen.

      x  *  *  x
      x  *  *  x



     3/4 x's

      240 480 720 960
      480
       */

      if ((xList.includes(candidate.x)) || (yList.includes(candidate.y))) {
        continue;
      } else {
        xList.push(x);
        yList.push(y);
        condition = false;
        return candidate;
      }
    }
  }

  private drawSystem(x: number, y: number, xValue: number, yValues: number[]) {
    let circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute('stroke', '#738496');
    circle.setAttribute('fill', '#101214');

    circle.setAttribute('cx', `${x}`);
    circle.setAttribute('cy', `${y}`);
    circle.setAttribute('r', '25');
    circle.setAttribute('id', `${xValue}`);

    let txt = document.createElementNS("http://www.w3.org/2000/svg", 'text');
    txt.setAttribute('x', `${x}`);
    txt.setAttribute('y', `${y + 3}`);
    txt.setAttribute('font-size', '1rem');
    txt.setAttribute('fill', '#eee');
    txt.setAttribute('text-anchor', 'middle');
    txt.innerHTML = `${xValue}`;

    for (let i = 0; i < yValues.length; i++) {
      let orbitNumber = i + 1;
      let orbit = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      orbit.setAttribute('stroke', 'rgba(115, 132, 150, 0.15)');
      orbit.setAttribute('stroke-dasharray', '5,10');
      orbit.setAttribute('fill', 'none');

      let radius = 25 + (15 * orbitNumber);

      let sign = Math.random() < 0.5 ? -1 : 1;
      let degrees = Math.random() * 90 * sign; // TODO: sort out polar rotation

      // 𝐶𝑥=𝐴𝑥+(𝐵𝑥−𝐴𝑥)cos𝛼−(𝐵𝑦−𝐴𝑦)sin𝛼
      // 𝐶𝑦=𝐴𝑦+(𝐵𝑥−𝐴𝑥)sin𝛼+(𝐵𝑦−𝐴𝑦)cos𝛼

      let centerX = x;
      let centerY = y;
      let cx = centerX + (radius * Math.cos(degrees));
      let cy = centerY + (radius * Math.sin(degrees));

      orbit.setAttribute('cx', `${x}`);
      orbit.setAttribute('cy', `${y}`);
      orbit.setAttribute('r', `${radius}`);

      document.getElementById('points')!.appendChild(orbit);

      let planet = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      planet.setAttribute('stroke', 'none');
      planet.setAttribute('fill', 'rgba(115, 132, 150, 1)');

      planet.setAttribute('cx', `${cx}`);
      planet.setAttribute('cy', `${cy}`);
      planet.setAttribute('r', '3.5');
      planet.setAttribute("class", 'answer');
      planet.setAttribute("id", `${xValue},${yValues[i]}`);
      // planet.setAttribute("click", 'setAnswer(100)');

      document.getElementById('answers')!.appendChild(planet);

      let yTxt = document.createElementNS("http://www.w3.org/2000/svg", 'text');
      yTxt.setAttribute('x', `${cx - 15}`);
      yTxt.setAttribute('y', `${cy + 15}`);
      yTxt.setAttribute('font-size', '0.75rem');
      yTxt.setAttribute('fill', '#eee');
      yTxt.innerHTML = `${yValues[i]}`;

      document.getElementById('points')!.appendChild(yTxt);

    }

    document.getElementById('points')!.appendChild(circle);
    document.getElementById('points')!.appendChild(txt);

  }

  private setAnswer(xValue: number, yValue: number, id: string): void {
    const i = this.selectedAnswers.findIndex(e => e.x === xValue);

    if (i > -1) {
      let removalId = `${this.selectedAnswers[i].x},${this.selectedAnswers[i].y}`
      document.getElementById(removalId)!.setAttribute('fill', '#738496');
      this.selectedAnswers[i] = {x: xValue, y: yValue};
    } else {
      this.selectedAnswers.push({x: xValue, y: yValue});
    }

    if (this.isAnswerCorrect(xValue, yValue)) {
      document.getElementById(id)!.setAttribute('fill', '#36B37E');
      document.getElementById(`${xValue}`)!.setAttribute('stroke', '#36B37E');
    } else {
      document.getElementById(id)!.setAttribute('fill', '#FF5630');
      document.getElementById(`${xValue}`)!.setAttribute('stroke', '#FF5630');
    }

    if (this.selectedAnswers.length === 7 && this.areAllAnswersCorrect()) {
      this.gameService.setGameOver(true);
    }

  }

  private isAnswerCorrect(x: number, y: number): boolean {
    return y === (this.mValue * x + this.cValue);
  }

  private areAllAnswersCorrect(): boolean {
    if (this.selectedAnswers.length < 7) return false;
    let allCorrect = true;

    for (let answerCombo of this.selectedAnswers) {
      if (!this.isAnswerCorrect(answerCombo.x, answerCombo.y)) allCorrect = false;
    }

    return allCorrect;
  }

}
