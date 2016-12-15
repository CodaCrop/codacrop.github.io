import { Component, OnInit, animate, state, style, transition, trigger } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Booking, BookingCodes } from './booking.interface';
import { Http, Response } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';

@Component({
  moduleId: module.id,
  selector: 'booking',
  templateUrl: 'app.component.html',
})

export class AppComponent {

  booking: FormGroup;
  bookingcode: FormGroup;

  constructor(
    private http: Http,
    private route: ActivatedRoute,
    private router: Router
  ) { }

}
