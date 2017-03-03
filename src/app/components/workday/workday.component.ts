import {Component, Input} from "@angular/core";
import {Day} from "../../classes/day";
import {Router} from "@angular/router";
import {AppComponent} from "../../app.component";
import {PagerService} from "../../services/pager.service";

@Component({
  moduleId: module.id,
  selector: 'workday',
  templateUrl: 'workday.component.html',
  styleUrls: ['../../../styles.css']
})

export class WorkdayComponent {
  app = AppComponent;

  @Input() day: Day;

  constructor(
      private router: Router,
      private pagerService: PagerService,
  ) { }

  navigateTaskList() {
    this.pagerService.selectedDay = this.day;
    this.router.navigate(['/task-list']);
  }
}
