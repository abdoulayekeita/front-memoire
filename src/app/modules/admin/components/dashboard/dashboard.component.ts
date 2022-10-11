import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../../../service/auth/auth.service'


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
   @Input() item = '';
   isDashbord: boolean;

  constructor(private authService: AuthService) {
     this.loadScripts();
     this.loadCss();
     this.authService.changeState(false);
     this.isDashbord = this.authService.IS_DASHBORD;
   }
   ngOnInit(): void {
    console.log("ini")
    console.log(this.isDashbord)
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
