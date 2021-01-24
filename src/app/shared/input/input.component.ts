import {
  Component,
  ContentChild,
  Input,
  OnInit,
  AfterContentInit,
} from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-input-container',
  templateUrl: './input.component.html',
})
export class InputComponent implements OnInit, AfterContentInit {
  @Input() label: string = '';
  @Input() errorMessage: string = '';

  input: any;

  @ContentChild(NgModel) model!: NgModel;

  constructor() {}

  ngAfterContentInit(): void {
    this.input = this.model;

    if (this.input === undefined) {
      throw new Error(
        'Esse componente precisa ser usado com uma diretiva ngModel'
      );
    }
  }

  ngOnInit(): void {}

  hasSuccess(){
    return this.input.valid && (this.input.dirty || this.input.touched);
  }

  hasError(){
    return this.input.invalid && (this.input.dirty || this.input.touched);
  }
}
