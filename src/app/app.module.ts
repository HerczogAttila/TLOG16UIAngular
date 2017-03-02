import { NgModule }           from '@angular/core';
import { BrowserModule }      from '@angular/platform-browser';
import { FormsModule }        from '@angular/forms';

import { AppComponent }       from './app.component';

import { AppRoutingModule }   from './app-routing.module';
import { TaskListComponent }  from './components/task-list/task-list.component';
import { CalendarComponent }  from './components/calendar/calendar.component';
import {SimpleDayComponent} from "./components/simple-day/simple-day.component";
import {WorkdayComponent} from "./components/workday/workday.component";
import {WeekComponent} from "./components/week/week.component";
import {MonthlyStatisticComponent} from "./components/monthly-statistic/monthly-statistic.component";
import {WeekService} from "./services/week.service";

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
    MonthlyStatisticComponent,
  ],
  providers: [
    WeekService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
