import {
  HttpEvent, HttpHandler, HttpInterceptor, HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class RequestHeaderInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const requestUrl: string = request.url;
    const protocolIdx: number = requestUrl.indexOf('/');
    const protocol: string = requestUrl.substring(0, protocolIdx + 2);
    const someUrl: string = request.urlWithParams.replace(protocol, '');
    const slashIdx: number = someUrl.indexOf('/');
    const url: string = protocol + someUrl.substring(0, slashIdx) + '/api/v1' + someUrl.substring(slashIdx);
    const modifiedRequest: HttpRequest<unknown> = request.clone({'url' : url , 'setHeaders' : {'Content-Type': 'application/json'}});
    return next.handle(modifiedRequest);
  }
}
