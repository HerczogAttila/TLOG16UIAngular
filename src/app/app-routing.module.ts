import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent }   from './components/calendar/calendar.component';
import { TaskListComponent }      from './components/task-list/task-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/calendar', pathMatch: 'full' },
  { path: 'calendar', component: CalendarComponent },
  { path: 'task-list', component: TaskListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
