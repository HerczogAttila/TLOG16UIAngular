import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
        <h1>{{title}}</h1>
        <nav>
            <a routerLink="/calendar">Calendar</a>
            <a routerLink="/task-list/{{day}}">Task list </a>
        </nav>
        <router-outlet></router-outlet>
        `,
  styleUrls: ['app/app.component.css'],
})

export class AppComponent {
  title = 'TLOG16UIAngular';

  date: any = new Date();
  //year: number = this.date.getFullYear();
  //month: number = this.date.getMonth();
  day: number = this.date.getDate();

  static getColor(n: number) {
    if(n >= 0)
      return 'green';
    else
      return 'red';
  }
}
