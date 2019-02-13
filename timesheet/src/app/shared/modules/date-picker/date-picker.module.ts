import { NgModule } from '@angular/core';
import { MatDatepickerModule, MatIconModule, MatNativeDateModule } from '@angular/material';
import { DatePickerComponent } from './date-picker.component';

@NgModule({
  imports: [
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  declarations: [DatePickerComponent],
  exports: [DatePickerComponent]
})
export class DatePickerModule {
}
