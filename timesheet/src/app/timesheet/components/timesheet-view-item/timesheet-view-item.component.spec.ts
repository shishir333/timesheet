import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimesheetViewItemComponent } from './timesheet-view-item.component';

describe('TimesheetViewItemComponent', () => {
  let component: TimesheetViewItemComponent;
  let fixture: ComponentFixture<TimesheetViewItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimesheetViewItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimesheetViewItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
