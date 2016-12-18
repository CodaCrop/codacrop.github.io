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
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var data_pipe_1 = require("./data.pipe");
require("rxjs/add/operator/mergeMap");
require("rxjs/add/operator/map");
var BookingDataComponent = (function () {
    function BookingDataComponent(http) {
        this.http = http;
    }
    BookingDataComponent.prototype.ngOnInit = function () {
        this.getData();
    };
    BookingDataComponent.prototype.getData = function () {
        var _this = this;
        this.http.get('../assets/mock/mock.json')
            .map(function (res) { return res.json(); })
            .subscribe(function (data) { _this.result = data, console.log('test'); }, function (err) { console.log(err), console.log('error'); }, function () { return console.log('done'); });
    };
    return BookingDataComponent;
}());
BookingDataComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'app-root',
        templateUrl: 'booking-data.component.html',
        providers: [data_pipe_1.DataPipe]
    }),
    __metadata("design:paramtypes", [http_1.Http])
], BookingDataComponent);
exports.BookingDataComponent = BookingDataComponent;
//# sourceMappingURL=booking-data.component.js.map