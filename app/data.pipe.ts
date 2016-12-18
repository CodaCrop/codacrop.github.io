import { PipeTransform, Pipe } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import { BookingDataComponent } from './booking-data.component';

@Pipe({
  name: 'filter'
})
export class DataPipe implements PipeTransform {
  transform(value: any, args: string[]): any {
    let filter = [];
    for(let key in value) {
      filter.push(key)
    }
    return filter;
  }
}
import { PipeTransform, Pipe } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import { BookingDataComponent } from './booking-data.component';

@Pipe({
  name: 'filter'
})
export class DataPipe implements PipeTransform {
  transform(value: any, args: string[]): any {
    let filter = [];
    for(let key in value) {
      filter.push(key)
    }
    return filter;
  }
}
>>>>>>> e31e2be1b0d2051ef2a3a6016a9dc7193cd9e0ad
