import {Component, Input} from "@angular/core";
import {AppComponent} from "../../app.component";

@Component({
    moduleId: module.id,
    selector: 'monthly-statistic',
    templateUrl: 'monthly-statistic.component.html',
    styleUrls: ['../../../styles.css']
})

export class MonthlyStatisticComponent {
    app = AppComponent;

    @Input() reqWorkMinutes: number;
    @Input() minutes: number;
    @Input() extraMinutes: number;
}