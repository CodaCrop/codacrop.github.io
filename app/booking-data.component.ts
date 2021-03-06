import { Component, Injectable, Pipe, PipeTransform } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { DataPipe } from './data.pipe';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'booking-data.component.html'
})

export class BookingDataComponent {

  private result:any;
  constructor(private http: Http) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.http.get('../assets/mock/mock.json')
      .map((res:Response) => res.json())
      .subscribe(
        data => { this.result = data },
        err => { console.log(err) },
        () => console.log('done')
      );
  }

}
