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

    ngOnInit() {
        this.weekService.update();
    }
}
