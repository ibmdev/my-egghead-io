import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleFormEventsComponent } from './simple-form-events.component';

describe('SimpleFormEventsComponent', () => {
  let component: SimpleFormEventsComponent;
  let fixture: ComponentFixture<SimpleFormEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleFormEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleFormEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
