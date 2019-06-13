import { Component } from '@angular/core';
import { EventsService } from './../events.service';
import { EventModel } from './../event.model';

@Component({
  templateUrl: './event-listing.component.html',
  styleUrls: ['./event-listing.component.scss']
})
export class EventListingComponent {

  events: EventModel[];
  keyword: string;

  constructor(private eventsService: EventsService) {
    this.loadData();
  }

  private loadData(): void {
    this.eventsService.getEvents().subscribe(events => {
      this.events = events;
    });
  }

  deleteEvent(id: number): void {
    this.eventsService.deleteEvent(id).subscribe(() => {
      this.loadData();
    });
  }

}
