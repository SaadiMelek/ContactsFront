import {ErrorHandler, Injectable, Injector} from '@angular/core';
import {Router} from '@angular/router';
import {HttpErrorResponse} from '@angular/common/http';

@Injectable()
export class GlobalErrorHandlerService implements ErrorHandler {
  constructor(private injector: Injector) { }

  handleError(error: any) {
    let router = this.injector.get(Router);
    console.log('URL: ' + router.url);

    if (error instanceof HttpErrorResponse) {
      //Backend returns unsuccessful response codes such as 404, 500 etc.
      console.log('Backend returned status code: ', error.status);
      console.log('Response body:', error.message);
    } else {
      //A client-side or network error occurred.
      console.log('An error occurred:', error);
    }
    router.navigate(['/error']);
  }
}
