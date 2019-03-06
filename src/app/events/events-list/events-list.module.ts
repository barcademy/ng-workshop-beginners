import {NgModule} from '@angular/core';
import {EventsListComponent} from './events-list.component';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import {SearchPipe} from './search.pipe';
import {FormsModule} from '@angular/forms';

const routes: Routes = [
  {path: 'events', component: EventsListComponent}
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    HttpClientModule
  ],
  declarations: [
    EventsListComponent,
    SearchPipe
  ]
})
export class EventsListModule {

}
