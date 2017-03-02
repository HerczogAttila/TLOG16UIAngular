import {Component, Input} from "@angular/core";
import {Day} from "../../classes/day";

@Component({
    moduleId: module.id,
    selector: 'daily-statistic',
    templateUrl: 'daily-statistic.component.html',
    styleUrls: ['../../../styles.css']
})

export class DailyStatisticComponent {
    @Input() day: Day;
}