import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
   @Input() item = '';
  constructor() {
     this.loadScripts();
     this.loadCss();
   }
   ngOnInit(): void {
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
