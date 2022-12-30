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
    let container1 = document.getElementById('container1')!;
    let title = document.getElementById('title')!;
    let container2 = document.getElementById('container2')!;

    if (this.menuExpanded) {
      this.menuExpanded = false;
      tagLine.className = 'closed';
      title.className = 'closed';
      container1.className = 'closed';
      container2.className = 'closed';


    } else {
      this.menuExpanded = true;
      tagLine.className = 'expanded';
      title.className = 'expanded';
      container1.className = 'expanded';
      container2.className = 'expanded';

    }
  }

}
