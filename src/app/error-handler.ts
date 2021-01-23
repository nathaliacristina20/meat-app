import { of } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

export class ErrorHandler {
  static handleError(error: HttpErrorResponse | any) {
    let errorMessage;

    if (error instanceof HttpErrorResponse) {
      errorMessage = `Erro ${error.status} ao acessar a URL ${error.url} - ${error.statusText}`;
    } else {
      errorMessage = error.toString();
    }
    console.error(errorMessage);

    return of(errorMessage);
  }
}
