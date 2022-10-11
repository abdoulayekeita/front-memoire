import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, Observable, Subscriber, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Status } from '../../enum/status.enum';
import { App } from '../../interface/app';
import { CustomResponse } from '../../interface/custom-response';
import { OnInit } from '@angular/core';

@Injectable({ providedIn: 'root'})
export class AppService  {
  private readonly  apiUrl:string;

  constructor(private http: HttpClient) {
    this.apiUrl = "http://localhost:8088/api";
   }

  apps$ = <Observable<CustomResponse>>
  this.http.get<CustomResponse>(`http://localhost:8088/api/app/all`)
  .pipe(
    tap(console.log),
    catchError(this.handleError)
  );

  save$ = (app: App) => <Observable<CustomResponse>>
  this.http.post<CustomResponse>(`${this.apiUrl}/app/save`, app)
  .pipe(
    tap(console.log),
    catchError(this.handleError)
  );

  delete$ = (appId: number) => <Observable<CustomResponse>>
  this.http.delete<CustomResponse>(`${this.apiUrl}/app/delete/${appId}`)
  .pipe(
    tap(console.log),
    catchError(this.handleError)
  );

  filter$ = (status: Status, response: CustomResponse) => <Observable<CustomResponse>>
  new Observable<CustomResponse>(
    Subscriber => {
      console.log(response);
      Subscriber.next(

      )
    }
  )
  .pipe(
    tap(console.log),
    catchError(this.handleError)
  );

  private handleError(error: HttpErrorResponse): Observable<never> {
    console.log(error)
    return throwError(`Àn error occured - Error code: ${error.status}`);
  }

}


