import {Component} from '@angular/core';
import {EventModel} from '../event.model';
import {EventsService} from '../events.service';
import {Router} from '@angular/router';

@Component({
  template: `
    <div>
      <div class="ui input">
        <input type="text" placeholder="Name" [(ngModel)]="event.name">
      </div>
    </div>

    <div>
      <div class="ui input">
        <input type="text" placeholder="Location" [(ngModel)]="event.location">
      </div>
    </div>

    <div>
      <div class="ui checkbox">
        <input type="checkbox" name="example" [(ngModel)]="event.free">
        <label>Free entry</label>
      </div>
    </div>

    <button class="ui primary button" (click)="saveEvent()">
      Save Event
    </button>
  `
})
export class NewEventComponent {
  event = new EventModel();

  constructor(private eventService: EventsService, private router: Router) {

  }

  saveEvent() {
    this.eventService.saveEvent(this.event).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
