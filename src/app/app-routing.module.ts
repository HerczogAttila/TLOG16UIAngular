import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent }   from './calendar.component';
import { TaskListComponent }      from './task-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/calendar', pathMatch: 'full' },
  { path: 'calendar', component: CalendarComponent },
  { path: 'task-list/:date', component: TaskListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
