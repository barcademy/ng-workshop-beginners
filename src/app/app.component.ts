import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <header>
      <img src="assets/logo.png"/>
      <span>NG Workshop</span>
    </header>
    
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

}
