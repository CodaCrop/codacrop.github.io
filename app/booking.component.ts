import { Component, animate, state, style, transition, trigger } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Http, Response } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Booking } from './booking.interface';

// The initial page will run on a template and contains animations for error handling
@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'booking.component.html',
  animations: [
    trigger(
      'smoothWarning', [
        transition(':enter', [
          style({transform: 'translateX(20px)', opacity: 0}),
          animate('300ms', style({transform: 'translateX(0px)', opacity: 1}))
        ]),
        transition(':leave', [
          style({transform: 'translateX(0px)', opacity: 1}),
          animate('300ms', style({transform: 'translateX(20px)', opacity: 0}))
        ])
      ]
    )
  ]
})

export class BookingComponent {

  private result:any;
  bookingCode:string;
  show:boolean = false;
  booking: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: Http
  ) {}

  ngOnInit() {
    // Validate form through FormControl and Validators
    this.getBookingCode();
    this.booking = new FormGroup({
      bookingcode: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(6), Validators.pattern('[A-Z2-9 ]*')]),
      familyname: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*')])
    });
  }

  getBookingCode() {
    this.http.get('../assets/mock/mock.json')
      .map((res:Response) => res.json())
      .subscribe(
        data => { this.result = data },
        err => { console.log(err) },
        () => console.log('done')
      );
  }
  onSubmit({value, valid}: { value: Booking, valid: boolean}) {
    // If bookingcode equals PZIGZ3; then go to booking data
    if(value.bookingcode == this.result.bookingCode) {
      this.router.navigate(['booking-data']);
    }
    console.log(value.bookingcode, valid);
  }

}
