import { RatingComponent } from './shared/rating/rating.component';
import { InputComponent } from './shared/input/input.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadioComponent } from './shared/radio/radio.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [InputComponent, RadioComponent, RatingComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [
    InputComponent,
    RadioComponent,
    RatingComponent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class SharedModule {}
