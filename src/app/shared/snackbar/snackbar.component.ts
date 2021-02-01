import { tap, switchMap } from 'rxjs/operators';
import { NotificationService } from './../services/notification.service';

import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css'],
  animations: [
    trigger('snack-visibility', [
      state(
        'hidden',
        style({
          opacity: 0,
          bottom: '0px',
        })
      ),
      state(
        'visible',
        style({
          opacity: 1,
          bottom: '30px',
        })
      ),
      transition('hidden => visible', animate('500ms 0s ease-in')), // <duracao> <delay> <easing>
      transition('visible => hidden', animate('500ms 0s ease-out')),
    ]),
  ],
})
export class SnackbarComponent implements OnInit {
  snackVisibility = 'hidden';
  public message: string | undefined;

  constructor(private notificationService: NotificationService) {}

  ngOnInit(): void {
    this.notificationService.notifier
      .pipe(
        tap((message) => {
          this.message = message;
          this.snackVisibility = 'visible';
          return message;
        }),
        switchMap(() => timer(3000)) // faz unsubscribe se houver outro Observable anterior ativo
      )
      .subscribe(() => {
        this.snackVisibility = 'hidden';
      });
  }
}
