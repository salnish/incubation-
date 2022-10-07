import { Observable, catchError } from 'rxjs';
import { HttpErrorResponse,  HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable ,ErrorHandler} from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService implements ErrorHandler ,HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      
    )
  }

  handleError(error: any): void {
    console.log("hansle")
  }
}
