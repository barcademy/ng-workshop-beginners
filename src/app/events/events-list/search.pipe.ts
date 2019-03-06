import {Pipe, PipeTransform} from '@angular/core';
import {Event} from '../event.model';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(events: Event[], keyword: string): Event[] {
    if (keyword) {
      return events.filter(event =>
        event.name.toLowerCase().includes(keyword.toLowerCase()) || event.location.toLowerCase().includes(keyword.toLowerCase())
      );
    } else {
      return events;
    }
  }

}
