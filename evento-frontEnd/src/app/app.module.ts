import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Angular Animations
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// Angular Material Modules
import {MaterialModule} from './material.modules';
import { NavbarComponent } from './navbar/navbar.component';
import { ViewAdcolComponent } from './view-adcol/view-adcol.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ViewAdcolComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
