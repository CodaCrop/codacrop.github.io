import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent }   from './app.component.js';
import { BookingComponent } from './booking.component';
import { BookingDataComponent } from './booking-data.component';

import { AppRoutes } from './app-routing.module';

@NgModule({
  imports:      [ BrowserModule, RouterModule.forRoot(AppRoutes), HttpModule, FormsModule, ReactiveFormsModule ],
  declarations: [ AppComponent, BookingComponent, BookingDataComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
