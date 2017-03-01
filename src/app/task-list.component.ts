import 'rxjs/add/operator/switchMap';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
//import { Location } from '@angular/common';
import {Day} from "./day";
import {Task} from "./task";

@Component({
  moduleId: module.id,
  selector: 'task-list',
  templateUrl: 'task-list.component.html',
  styleUrls: ['../styles.css'],
})

export class TaskListComponent implements OnInit {
  day: Day = new Day();
  tasks: Task[] = [];

  constructor(
    private route: ActivatedRoute,
    //private location: Location
  ) {}

  ngOnInit() {
    let sub: string = "1-1-1";
    this.route.params.subscribe(params => { sub = params['date'] });
    let token = sub.split('-');
    this.day.year = +token[0];
    this.day.month = +token[1];
    this.day.day = +token[2];

    this.tasks.push(new Task());
    this.tasks.push(new Task());
  }
}
