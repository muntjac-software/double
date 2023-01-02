import { Component } from '@angular/core';
import { faBars, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { environment } from "../environments/environment";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tagLine = environment.tagLine;
  title = environment.title;
  urlGitHub = environment.urlGitHub;

  iconMenu = faBars;
  iconWarning = faTriangleExclamation;

  menuExpanded: boolean = false;
  menuClosed: boolean = false;

  toggleMenu(): void {
    this.menuExpanded = !this.menuExpanded;
    this.menuClosed = !this.menuExpanded
  }

}
