import {Component, Input} from "@angular/core";
import {Day} from "./day";

@Component({
  moduleId: module.id,
  selector: 'simple-day',
  templateUrl: './simple-day.component.html',
  styleUrls: ['../styles.css']
})

export class SimpleDayComponent {
  @Input() day: Day;

  makeWorkday() {
    this.day.type = "work";
    this.day.extraMinutes = Math.floor(Math.random() * 200 - 100);
  }


}
