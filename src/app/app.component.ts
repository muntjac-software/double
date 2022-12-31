import { Component } from '@angular/core';
import { faBars, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'double';
  urlGitHub = 'https://github.com/muntjac-software/double' // TODO: extract to properties

  iconMenu = faBars;
  iconWarning = faTriangleExclamation;

  menuExpanded: boolean = false;
  menuClosed: boolean = false;

  toggleMenu(): void {
    this.menuExpanded = !this.menuExpanded;
    this.menuClosed = !this.menuExpanded
  }

}
