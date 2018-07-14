import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-form-events',
  template: `
    <input #sfEvents type="text">
    <button (click)="onClick(sfEvents.value)" >Click me !</button>
  `,
  styles: []
})
export class SimpleFormEventsComponent implements OnInit {

  constructor() { }

  onClick(value) {
    console.log('Click on button for simple form events', value);
  }

  ngOnInit() {
  }

}
