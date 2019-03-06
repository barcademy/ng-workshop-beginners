import {NgModule} from '@angular/core';
import {EventsListModule} from './events-list/events-list.module';
import {EventsUpsertModule} from './events-upsert/events-upsert.module';

@NgModule({
  imports: [
    EventsListModule,
    EventsUpsertModule
  ]
})
export class EventsModule {

}
