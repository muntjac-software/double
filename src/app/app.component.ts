import { Component } from '@angular/core';
import { faBars, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'double';
  iconMenu = faBars;
  iconWarning = faTriangleExclamation;

  menuExpanded: boolean = false;

  toggleMenu(): void {
    this.menuExpanded = !this.menuExpanded;
  }

}
