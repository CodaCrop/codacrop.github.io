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
      if(value.hasOwnProperty(key)) {
        filter.push({key: key, value: value[key]})
      }
    }
    return filter;
  }
}
