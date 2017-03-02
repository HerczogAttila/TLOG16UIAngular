import {Task} from "./task";

export class Day {
  type: string;   //empty, simple, work
  year: number;
  month: number;
  day: number;
  requiredWorkMinutes: number = 0;
  minutes: number = 0;
  extraMinutes: number = 0;
  tasks: Task[] = [];

  getDate() { return this.year + '-' + this.month + '-' + this.day; }
}
