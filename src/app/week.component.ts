import {Component, Input} from "@angular/core";
import {Week} from "./week";

@Component({
  moduleId: module.id,
  selector: 'week',
  templateUrl: './week.component.html',
  styleUrls: ['../styles.css']
})

export class WeekComponent {
  @Input() week: Week;
}
