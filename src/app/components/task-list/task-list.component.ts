import 'rxjs/add/operator/switchMap';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Day} from "../../classes/day";
import {Task} from "../../classes/task";
import {WeekService} from "../../services/week.service";

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
      private weekService: WeekService,
  ) {}

  ngOnInit() {
    let sub: number = 1;
    this.route.params.subscribe(params => { sub = +params['day'] });
    for(let w of this.weekService.weeks) {
      for (let d of w.days) {
        if(d.day == sub) this.day = d;
      }
    }

    /*for(let i = 0; i < 10; i++) {
      this.day.tasks.push(new Task());
    }*/
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

  modifyDay(minutes: number) {
    //this.day.requiredWorkMinutes = +reqMin;
    this.day.minutes = +minutes;
    this.day.extraMinutes = this.day.minutes - this.day.requiredWorkMinutes;
  }

  modifyTask(id: string, comment: string, startHour: string, startMinute: string, endHour: string, endMinute: string) {
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
