export class Activity {
  heading: string;
  content: string;
  data: string;
  date: Date;
  id: string;
  deeplink: boolean;
  notification: boolean;
  constructor(contents: Object){
    Object.assign(this, contents);
  }
}

export class DateRange {
  begin: Date;
  end: Date;
  constructor(begin: Date, end: Date){
    this.begin = begin;
    this.end = end;
  }
}
