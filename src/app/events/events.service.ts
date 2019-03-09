import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {Event} from './event.model';
import {map} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class EventsService {

  private readonly url = 'https://angular.gobuild.guru/ng-workshop';

  constructor(private http: HttpClient) {

  }

  events(): Observable<Event[]> {
    return this.http.get<Event[]>(`${this.url}/events`)
      .pipe(map(events => events.map(event => this.convertEvent(event))));
  }

  event(id: number): Observable<Event> {
    return this.http.get<Event>(`${this.url}/events/${id}`)
      .pipe(map(event => this.convertEvent(event)));
  }

  saveEvent(event: Event): Observable<Event> {
    if (event.id) {
      return this.http.put(`${this.url}/events/${event.id}`, event);
    } else {
      event.id = new Date().getTime();
      return this.http.post(`${this.url}/events`, event);
    }
  }

  deleteEvent(id: number): Observable<Event> {
    return this.http.delete(`${this.url}/events/${id}`);
  }

  private convertEvent(event: Event): Event {
    event.date = event.date ? new Date(event.date) : null;
    return event;
  }

}
