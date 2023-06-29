import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  username = '';
  showSecret = false;
  log: string[] = [];
  onToggleDetails() {
    this.showSecret = !this.showSecret;
    let date: string = new Date().toISOString();
    this.log.push(date);
  }
}
