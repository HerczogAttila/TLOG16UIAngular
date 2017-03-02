import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import {WeekService} from "../../services/week.service";
import {PagerService} from "../../services/pager.service";

@Component({
  moduleId: module.id,
  selector: 'calendar',
  templateUrl: 'calendar.component.html',
  styleUrls: ['../../../styles.css']
})

export class CalendarComponent implements OnInit {
  constructor(
      private weekService: WeekService,
      private pagerService: PagerService,
  ) { }

  daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  ngOnInit() : void {
    this.pagerService.init();
  }
}
