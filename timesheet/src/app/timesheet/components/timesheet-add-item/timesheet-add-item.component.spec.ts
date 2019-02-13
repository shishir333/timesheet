import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimesheetAddItemComponent } from './timesheet-add-item.component';

describe('TimesheetAddItemComponent', () => {
  let component: TimesheetAddItemComponent;
  let fixture: ComponentFixture<TimesheetAddItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimesheetAddItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimesheetAddItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
