import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-event-thumbnail',
    template: `
      <div class="well hoverwell thumbnail">
        <h2>{{event.name}}</h2>
        <div class="">{{event.date}}</div>
        <div class="">{{event.time}}</div>
        <div class="">
          <span class="">Location: {{event.location.address}},</span>
          <span class=""> {{event.location.city}},</span>
          <span class=""> {{event.location.country}}.</span>
        </div>
        <button class="btn btn-info" (click)="clickMe()"> Click Bro</button>
      </div>`
})

export class EventThumbnailComponent {
    @Input() event: any

    logFoo() {
        console.log('foo')
    }

}
