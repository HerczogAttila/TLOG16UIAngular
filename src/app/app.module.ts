import { NgModule }           from '@angular/core';
import { BrowserModule }      from '@angular/platform-browser';
import { FormsModule }        from '@angular/forms';

import { AppComponent }       from './app.component';

import { AppRoutingModule }   from './app-routing.module';
import { TaskListComponent }  from './task-list.component';
import { CalendarComponent }  from './calendar.component';
import {SimpleDayComponent} from "./simple-day.component";
import {WorkdayComponent} from "./workday.component";
import {WeekComponent} from "./week.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    TaskListComponent,
    CalendarComponent,
    SimpleDayComponent,
    WorkdayComponent,
    WeekComponent,
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
