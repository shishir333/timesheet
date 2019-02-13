import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimesheetFilterComponent } from './shared/modules/timesheet-filter/timesheet-filter.component';
import { TimesheetContainerComponent } from './timesheet/containers/timesheet-container/timesheet-container.component';
import { TimesheetViewItemComponent } from './timesheet/components/timesheet-view-item/timesheet-view-item.component';
import { TimesheetAddItemComponent } from './timesheet/components/timesheet-add-item/timesheet-add-item.component';
import { TimesheetListComponent } from './timesheet/components/timesheet-list/timesheet-list.component';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule, MatOptionModule,
  MatProgressSpinnerModule, MatRadioModule, MatSelectModule, MatSortModule
} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import {DatePickerModule} from './shared/modules/date-picker/date-picker.module';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    TimesheetFilterComponent,
    TimesheetContainerComponent,
    TimesheetViewItemComponent,
    TimesheetAddItemComponent,
    TimesheetListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    CommonModule,
    ReactiveFormsModule,
    DatePickerModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatSelectModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
