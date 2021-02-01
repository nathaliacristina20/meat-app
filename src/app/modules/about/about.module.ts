import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const ROUTES: Routes = [
  { path: '', component: AboutComponent }
];

@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class AboutModule { }
