import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service'

@Injectable()
export class HttpInterceptorService implements HttpInterceptor{
    constructor(private authService: AuthService) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (this.authService.isUserLoggedIn()) {
            const authReq = req.clone({
                headers: new HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${sessionStorage.getItem(this.authService.USER_TOKEN_SESSION_ATTRIBUTE_NAME)}`

                })
            });
            return next.handle(authReq);
        } else {
            return next.handle(req);
        }
    }
}
