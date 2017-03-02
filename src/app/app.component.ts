import {Component, OnInit} from '@angular/core';
import {PagerService} from "./services/pager.service";

@Component({
  selector: 'my-app',
  template: `
        <h1>{{title}}</h1>
        <nav>
            <a routerLink="/calendar">Calendar</a>
            <a routerLink="/task-list/{{pagerService.day}}">Task list </a>
        </nav>
        <router-outlet></router-outlet>
        `,
  styleUrls: ['app/app.component.css'],
})

export class AppComponent {
  title = 'TLOG16UIAngular';

  constructor(private pagerService: PagerService) {}

  static getColor(n: number) {
    if(n >= 0)
      return 'green';
    else
      return 'red';
  }
}
