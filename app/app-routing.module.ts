import { NgModule, Component, ModuleWithProviders } from '@angular/core'
import { provideRoutes, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BookingComponent } from './booking.component';
import { BookingDataComponent } from './booking-data.component';

export const AppRoutes: Routes = [
  { path: '', redirectTo: 'booking', pathMatch: 'full' },
  { path: 'booking', component: BookingComponent },
  { path: 'booking-data', component: BookingDataComponent }
]
