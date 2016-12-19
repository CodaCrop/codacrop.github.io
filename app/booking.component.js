"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
// The initial page will run on a template and contains animations for error handling
var BookingComponent = (function () {
    function BookingComponent(route, router, http) {
        this.route = route;
        this.router = router;
        this.http = http;
        this.show = false;
    }
    BookingComponent.prototype.ngOnInit = function () {
        // Validate form through FormControl and Validators
        this.getBookingCode();
        this.booking = new forms_1.FormGroup({
            bookingcode: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(5), forms_1.Validators.maxLength(6), forms_1.Validators.pattern('[A-Z2-9 ]*')]),
            familyname: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(2), forms_1.Validators.maxLength(30), forms_1.Validators.pattern('[a-zA-Z ]*')])
        });
    };
    BookingComponent.prototype.getBookingCode = function () {
        var _this = this;
        this.http.get('../assets/mock/mock.json')
            .map(function (res) { return res.json(); })
            .subscribe(function (data) { _this.result = data; }, function (err) { console.log(err); }, function () { return console.log('done'); });
    };
    BookingComponent.prototype.onSubmit = function (_a) {
        var value = _a.value, valid = _a.valid;
        // If bookingcode equals PZIGZ3; then go to booking data
        if (value.bookingcode == this.result.bookingCode) {
            this.router.navigate(['booking-data']);
        }
        console.log(value.bookingcode, valid);
    };
    BookingComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-root',
            templateUrl: 'booking.component.html',
            animations: [
                core_1.trigger('smoothWarning', [
                    core_1.transition(':enter', [
                        core_1.style({ transform: 'translateX(20px)', opacity: 0 }),
                        core_1.animate('300ms', core_1.style({ transform: 'translateX(0px)', opacity: 1 }))
                    ]),
                    core_1.transition(':leave', [
                        core_1.style({ transform: 'translateX(0px)', opacity: 1 }),
                        core_1.animate('300ms', core_1.style({ transform: 'translateX(20px)', opacity: 0 }))
                    ])
                ])
            ]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, http_1.Http])
    ], BookingComponent);
    return BookingComponent;
}());
exports.BookingComponent = BookingComponent;
//# sourceMappingURL=booking.component.js.map