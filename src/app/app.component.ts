import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavigationComponent],
  styleUrls: ['./app.component.scss'],
  template: `
    <app-navigation>
      <router-outlet></router-outlet>
    </app-navigation>
  `,
})
export class AppComponent {
  title = 'ng17-on-netlify';
}
