import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedFetures = 'receipe';

  onNavigate(fetures: string) {
    this.loadedFetures = fetures;
  }
}
