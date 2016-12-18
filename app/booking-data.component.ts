<<<<<<< HEAD
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
  templateUrl: 'booking-data.component.html',
  providers: [DataPipe]
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
        data => { this.result = data, console.log('test') },
        err => { console.log(err), console.log('error') },
        () => console.log('done')
      );
  }

}
=======
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
  templateUrl: 'booking-data.component.html',
  providers: [DataPipe]
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
        data => { this.result = data, console.log('test') },
        err => { console.log(err), console.log('error') },
        () => console.log('done')
      );
  }

}
>>>>>>> e31e2be1b0d2051ef2a3a6016a9dc7193cd9e0ad
