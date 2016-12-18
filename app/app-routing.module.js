"use strict";
var booking_component_1 = require('./booking.component');
var booking_data_component_1 = require('./booking-data.component');
// Routing. Default page will be ran on booking.component
exports.AppRoutes = [
    { path: '', redirectTo: 'booking', pathMatch: 'full' },
    { path: 'booking', component: booking_component_1.BookingComponent },
    { path: 'booking-data', component: booking_data_component_1.BookingDataComponent }
];
//# sourceMappingURL=app-routing.module.js.map