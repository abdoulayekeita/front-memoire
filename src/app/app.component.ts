import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isDashbord = false;

  title = 'front-memoire';
  onchangeDashbord(isDashbord: boolean) {
   this.isDashbord = isDashbord;
 }
}
