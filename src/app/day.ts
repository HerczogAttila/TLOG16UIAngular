
export class Day {
  type: string;   //empty, simple, work
  year: number;
  month: number;
  day: number;
  extraMinutes: number;

  getDate() { return this.year + '-' + this.month + '-' + this.day; }
}
