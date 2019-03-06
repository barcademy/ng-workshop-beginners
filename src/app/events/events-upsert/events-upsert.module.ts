import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EventsUpsertComponent} from './events-upsert.component';
import {FormsModule} from '@angular/forms';
import {SuiDatepickerModule, SuiSelectModule} from 'ng2-semantic-ui';
import {CommonModule} from '@angular/common';

const routes: Routes = [
  {path: 'events/new', component: EventsUpsertComponent},
  {path: 'events/edit/:id', component: EventsUpsertComponent}
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    SuiDatepickerModule,
    SuiSelectModule
  ],
  declarations: [
    EventsUpsertComponent
  ]
})
export class EventsUpsertModule {

}
