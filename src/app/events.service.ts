import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {EventModel} from './event.model';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  private readonly url = 'https://angular.gobuild.guru/ng-workshop';
  httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  getEvents(): Observable<EventModel[]> {
    return this.httpClient.get<EventModel[]>(this.url + '/events');
  }

  deleteEvent(id: number): Observable<EventModel> {
    return this.httpClient.delete<EventModel>(this.url + '/events/' + id);
  }

  saveEvent(event: EventModel): Observable<EventModel> {
    event.id = new Date().getTime();
    return this.httpClient.post<EventModel>(this.url + '/events', event);
  }

}
