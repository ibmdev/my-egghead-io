import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import { SimpleFormEventsComponent } from './simple-form-events/simple-form-events.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleFormComponent,
    SimpleFormEventsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
