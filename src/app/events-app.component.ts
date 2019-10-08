import {Component} from '@angular/core';

@Component({
    selector: 'app-event',
    template: `
      <nav-bar></nav-bar>
      <app-events-list></app-events-list>`
})
export class EventsAppComponent {
    title = 'Angular-Test';
}
