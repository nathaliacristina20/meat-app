import { RadioOption } from './radio-option.model';
import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioComponent),
      multi: true,
    },
  ],
})
export class RadioComponent implements OnInit, ControlValueAccessor {
  @Input() options!: RadioOption[];

  value: any;

  onChange = (value: any) => {};
  onTouched = () => {};

  constructor() {}

  ngOnInit(): void {}

  setValue(value: any) {
    this.value = value;
    this.onChange(this.value);
    this.onTouched();
  }

  writeValue(obj: any): void {
    this.value = obj;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
