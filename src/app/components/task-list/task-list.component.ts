import 'rxjs/add/operator/switchMap';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
//import { Location } from '@angular/common';
import {Day} from "../../classes/day";
import {Task} from "../../classes/task";

@Component({
  moduleId: module.id,
  selector: 'task-list',
  templateUrl: 'task-list.component.html',
  styleUrls: ['../../../styles.css'],
})

export class TaskListComponent implements OnInit {
  day: Day = new Day();
  selectedTask: Task;

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

    for(let i = 0; i < 10; i++) {
      this.day.tasks.push(new Task());
    }
  }

  add(id: string) {
    if(!id) return;

    let t = new Task();
    t.id = id;
    this.day.tasks.push(t);
  }

  deleteTask(task: Task) {
    this.day.tasks = this.day.tasks.filter(t => t !== task);
    if(this.selectedTask === task) this.selectedTask = null;
  }

  modify(id: string, comment: string, startHour: string, startMinute: string, endHour: string, endMinute: string) {
    this.selectedTask.id = id;
    this.selectedTask.comment = comment;
    this.selectedTask.startHour = +startHour;
    this.selectedTask.startMinute = +startMinute;
    this.selectedTask.endHour = +endHour;
    this.selectedTask.endMinute = +endMinute;
  }

  onSelect(t: Task): void {
    this.selectedTask = t;
  }
}
