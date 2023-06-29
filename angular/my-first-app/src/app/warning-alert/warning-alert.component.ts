import { Component } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  template: ` <p>여기 위험해 너는 위험해</p> `,
  styles: [
    `
      p {
        padding: 20px;
        background-color: mistyrose;
        border: 1px solid red;
      }
    `,
  ],
})
export class WarningAlertComponent {}
