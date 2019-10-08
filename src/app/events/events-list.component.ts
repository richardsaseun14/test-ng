import {Component} from '@angular/core';

@Component({
    selector: 'app-events-list',
    template: `
      <div>
        <h1>Upcoming Angular Events</h1>
        <hr>
        <app-event-thumbnail [event]="event1"></app-event-thumbnail>
      </div>
    `
})

export class EventsListComponent {
    event1 = {
        id: 1,
        name: 'Angular Connect',
        date: '9/11/1996',
        time: '10:00 pm',
        price: 1000.00,
        location: {
            address: 'Apapa',
            city: 'Lagos',
            country: 'Nigeria',
        }
    }
}
