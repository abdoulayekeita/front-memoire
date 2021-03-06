import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, startWith } from 'rxjs/operators';
import { DataState } from '../enum/data-state.enum';
import { AppState } from '../interface/app-state';
import { CustomResponse } from '../interface/custom-response';
import { AppService } from '../service/app.service';

@Component({
  selector: 'app-create-app',
  templateUrl: './create-app.component.html',
  styleUrls: ['./create-app.component.css']
})
export class CreateAppComponent implements OnInit {
  appState$: Observable<AppState<CustomResponse>>;
  readonly DataState: DataState;

 constructor(private appService: AppService) {
     this.loadScripts();
     this.loadCss();
   }

   ngOnInit(): void {
     this.appState$ = this.appService.apps$
     .pipe(
       map(response => {
         return {dataState: DataState.LOADED_STATE, appData: response }
       }),
       startWith({dataState: DataState.LOADING_STATE }),
       catchError((error: string) => {
         return of({dataState: DataState.ERROR_STATE, error })
         })
       );
   }

 loadScripts() {
       const dynamicScripts = [
        '/assets/dist/js/app.js',
       ];
       for (let i = 0; i < dynamicScripts.length; i++) {
         const node = document.createElement('script');
         node.src = dynamicScripts[i];
         node.type = 'text/javascript';
         node.async = false;
         node.charset = 'utf-8';
         document.getElementsByTagName('head')[0].appendChild(node);
       }
     }

     loadCss() {
           const dynamicCss = [
            '/assets/dist/css/app.css',
           ];
           for (let i = 0; i < dynamicCss.length; i++) {
             const node = document.createElement('link');
             node.href = dynamicCss[i];
             node.rel = 'stylesheet';
             document.getElementsByTagName('head')[0].appendChild(node);
           }
         }


}
