import {Component, OnInit} from "@angular/core";
import {AppComponent} from "../../app.component";
import {WeekService} from "../../services/week.service";

@Component({
    moduleId: module.id,
    selector: 'monthly-statistic',
    templateUrl: 'monthly-statistic.component.html',
    styleUrls: ['../../../styles.css']
})

export class MonthlyStatisticComponent implements OnInit {
    app = AppComponent;

    constructor(private weekService: WeekService) { }

    reqWorkMinutes: number;
    minutes: number;
    extraMinutes: number;

    update() {
        this.reqWorkMinutes = 0;
        this.minutes = 0;
        this.extraMinutes = 0;
        for(let w of this.weekService.weeks) {
            for(let d of w.days) {
                this.reqWorkMinutes += d.requiredWorkMinutes;
                this.minutes += d.minutes;
                this.extraMinutes += d.extraMinutes;
            }
        }
    }

    ngOnInit() {
        this.update();
    }
}
