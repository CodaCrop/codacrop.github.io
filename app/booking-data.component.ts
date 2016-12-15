import { Component } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'booking-data.component.html'
})

export class BookingDataComponent {

  data: Object;

  constructor(private http: Http) { }

  ngOnInit() {

  }

}
