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
    let tagLine = document.getElementById('tag-line')!;

    if (this.menuExpanded) {
      this.menuExpanded = false;
      tagLine.className = 'closed';

    } else {
      this.menuExpanded = true;
      tagLine.className = 'expanded';

    }
  }

}
