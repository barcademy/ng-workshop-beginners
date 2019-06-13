import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NewEventComponent} from './new-event/new-event.component';
import {EventListingComponent} from './event-listing/event-listing.component';

const routes: Routes = [
  {path: '', component: EventListingComponent},
  {path: 'create', component: NewEventComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
