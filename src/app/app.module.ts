import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SuiModule } from 'ng2-semantic-ui';
import { HttpClientModule } from '@angular/common/http';
import {EventsService} from './events.service';
import {FormsModule} from '@angular/forms';
import {SearchPipe} from './search.pipe';
import {NewEventComponent} from './new-event/new-event.component';
import {EventListingComponent} from './event-listing/event-listing.component';

@NgModule({
  declarations: [
    AppComponent,
    NewEventComponent,
    EventListingComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SuiModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    EventsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
