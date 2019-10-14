import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'jhomein';
  x = null;
  constructor() {
    this.x = this.getPrueba();
  }

  getPrueba(): string {
    return 'hola mundo';
  }
}
