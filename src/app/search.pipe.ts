import {Pipe, PipeTransform} from '@angular/core';
import {EventModel} from './event.model';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(events: EventModel[], keyword: string): EventModel[] {
    if (keyword && events && events.length) {
      return events.filter(event =>
        event.name.toLowerCase().includes(keyword.toLowerCase()) ||
        event.location.toLowerCase().includes(keyword.toLowerCase())
      );
    } else {
      return events;
    }
  }
}
