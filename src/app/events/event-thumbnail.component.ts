import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IEvent } from './shared/index';

@Component ({
    selector: 'event-thumbnail',
    template: `
        <div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
        <h2> {{event?.name | uppercase}} </h2>
        <div>Date: {{event.date | date}}</div>
        <div>Time: {{event.time}}</div>
        <div>Price: {{event.price | currency:'USD' }}</div>
        <div>
            <span>Location: {{event.location.address}}</span>
            <span>&nbsp;</span>
            <span> {{event.location.city}}, {{event.location.country}}</span>
        </div>
        </div>
    `,
    styles: [`
        .thumbnail { min-height: 210px;}
        .pad-left { margin-left: 10px;}
        .well div { color: #bbb;}
        `]
})

export class EventThumbnailComponent {
 @Input() event: IEvent;
 @Output() eventClick = new EventEmitter();

 handleClickMe() {
     this.eventClick.emit(this.event.name);
 }

 logFoo() {
     console.log('some foo');
 }
}