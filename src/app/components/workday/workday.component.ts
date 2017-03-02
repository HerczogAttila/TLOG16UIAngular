import {Component, Input} from "@angular/core";
import {Day} from "../classes/day";
import {Router} from "@angular/router";
import {AppComponent} from "../app.component";

@Component({
  moduleId: module.id,
  selector: 'workday',
  templateUrl: 'workday.component.html',
  styleUrls: ['../../styles.css']
})

export class WorkdayComponent {
  app = AppComponent;

  @Input() day: Day;

  constructor(
    private router: Router) { }

  gotoTaskList() {
    this.router.navigate(['/task-list', this.day.getDate()]);
  }
}
