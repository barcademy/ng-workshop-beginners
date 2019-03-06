import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EventsListComponent} from './events/events-list/events-list.component';

const routes: Routes = [
  {path: '', redirectTo: '/events', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
