import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CapacityLookup} from '../capacity-lookup';
import {Event} from '../event.model';
import {EventsService} from '../events.service';

@Component({
  templateUrl: './events-upsert.component.html',
  styleUrls: ['./events-upsert.component.scss']
})
export class EventsUpsertComponent implements OnInit {

  id: number;
  event: Event = {};
  capacities = CapacityLookup.toArray();
  invalid = false;
  messages: string[];

  constructor(private route: ActivatedRoute, private router: Router, private eventsService: EventsService) {

  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'] as number;
    if (this.id) {
      this.eventsService.event(this.id).subscribe(event => this.event = event);
    }
  }

  create() {
    const valid = this.validateForm();

    if (valid) {
      this.eventsService.saveEvent(this.event).subscribe(() => {
        this.router.navigate(['/events']);
      });
    }
  }

  private validateForm(): boolean {
    this.messages = [];
    this.invalid = false;

    if (!this.event.name) {
      this.messages.push('Name must be specified!');
      this.invalid = true;
    }

    if (!this.event.location) {
      this.messages.push('Location must be specified!');
      this.invalid = true;
    }

    if (!this.event.date) {
      this.messages.push('Date must be specified!');
      this.invalid = true;
    } else if (this.event.date.getTime() < Date.now()) {
      this.messages.push('The date specified must be in future!');
      this.invalid = true;
    }

    if (this.event.capacity === undefined || this.event.capacity === null) {
      this.messages.push('Capacity must be specified!');
      this.invalid = true;
    }

    return !this.invalid;
  }

}
