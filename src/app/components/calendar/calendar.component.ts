import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import {Week} from "../classes/week";
import {Day} from "../classes/day";
import {AppComponent} from "../app.component";

@Component({
  moduleId: module.id,
  selector: 'calendar',
  templateUrl: 'calendar.component.html',
  styleUrls: ['../../styles.css']
})

export class CalendarComponent implements OnInit {
  app = AppComponent;

  date: any = new Date();
  year: number = this.date.getFullYear();
  month: number = this.date.getMonth();

  monthsOfYear = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];
  daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  dayInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  actualMonth: string;

  weeks: Week[];

  reqWorkMinutes: number = 500;
  minutes: number = 485;
  extraMinutes: number = -15;

  newMonth() {
    this.actualMonth = this.monthsOfYear[this.month];

    this.reqWorkMinutes = Math.floor(Math.random() * 1000 + 100);
    this.minutes = Math.floor(Math.random() * 900 + 50);
    this.extraMinutes = this.minutes - this.reqWorkMinutes;

    let firstDay = new Date(this.year, this.month, 1);
    let startingDay = (firstDay.getDay() + 6) % 7;

    let days: Day[] = [];
    this.weeks = [];
    let d: Day;
    for(let i = 1; i <= startingDay; i++) {
      d = new Day();
      d.type = 'empty';
      days.push(d);
    }

    let dayCount = this.getMonthDayCount();
    let w: Week;
    for(let i = 1; i <= dayCount; i++) {
      d = new Day();
      d.type = 'simple';
      d.day = i;
      d.month = this.month;
      d.year = this.year;
      days.push(d);
      if(days.length == 7) {
        w = new Week();
        w.days = days;
        days = [];
        this.weeks.push(w);
      }
    }

    if(days.length > 0) {
      w = new Week();
      w.days = days;
      this.weeks.push(w);
    }
  }

  prevMonth() {
    this.month--;
    if(this.month < 0) {
      this.month = 11;
      this.year--;
    }
    this.newMonth();
  }

  nextMonth() {
    this.month = (this.month + 1) % 12;
    if(this.month == 0) this.year++;
    this.newMonth();
  }

  getMonthDayCount() {
    if(this.month == 1)
      return ((this.year % 4 == 0 && this.year % 100 != 0) || this.year % 400 == 0) ? 29 : 28;

    return this.dayInMonth[this.month];
  }

  ngOnInit() : void {
    this.newMonth();
  }
}
