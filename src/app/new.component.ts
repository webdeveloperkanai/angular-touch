import { Component } from '@angular/core';

@Component({
  selector: 'kanai-div',
  template: '<h1>{{ title }}</h1>',
  styles: [
    `
      h1 {
        color: red;
      }
    `,
  ],
})
export class NewClass {
  title = 'This is demo text';
}
