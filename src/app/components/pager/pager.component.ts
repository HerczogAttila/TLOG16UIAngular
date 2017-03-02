import {PagerService} from "../../services/pager.service";
import {Component} from "@angular/core";

@Component({
    moduleId: module.id,
    selector: 'pager',
    templateUrl: 'pager.component.html',
    styleUrls: ['../../../styles.css']
})

export class PagerComponent {

    constructor(private pagerService: PagerService) {}
}
