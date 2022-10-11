import { Component, OnInit, Input, EventEmitter, Output, AfterViewChecked } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { AuthService } from '../../service/auth/auth.service'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  @Output() isDashbord = new EventEmitter<boolean>();
  constructor(private authService: AuthService) {
     this.loadScripts();
     this.loadCss();
     //this.isDashbord = this.authService.IS_DASHBORD;
   }
  
   ngOnInit(): void {
    this.authService.changeState(true);
    this.isDashbord.emit(true);
    console.log("iniaaaa")
   // console.log(this.isDashbord)
   }
   ngOnDestroy() {
    console.log("iniaaammmmmmmmmmmmmma")

   this.isDashbord.emit(false);
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
