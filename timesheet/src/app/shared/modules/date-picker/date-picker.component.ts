import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ts-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent {
  @Input() title: string;
  @Input() placeholder: string;
  @Input() maxValidDate: string;
  @Input() minValidDate: string;
  @Output() dateChange = new EventEmitter();
}

