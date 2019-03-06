import {Component} from '@angular/core';
import {EventsService} from '../events.service';
import {Event} from '../event.model';
import {CapacityLookup} from '../capacity-lookup';

@Component({
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent {

  keyword: string;
  events: Event[];
  capacityMap = CapacityLookup;

  constructor(private eventsService: EventsService) {
    this.loadData();
  }

  private loadData(): void {
    this.eventsService.events().subscribe(events => this.events = events);
  }

  deleteEvent(id: number) {
    this.eventsService.deleteEvent(id).subscribe(() => this.loadData());
  }

}
