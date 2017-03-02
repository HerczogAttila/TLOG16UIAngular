import {Injectable} from "@angular/core";
import {Week} from "../classes/week";

@Injectable()
export class WeekService {
    weeks: Week[] = [];
}