import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../service/auth/auth.service'
import { LoginModel } from '../../model/login-model';
import { Response } from '../../model/response';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 loginModel = new LoginModel();
 isDashbord: boolean;

 constructor(
   private authService: AuthService,
   private router: Router ,
   ) {
   console.log("cons")
    this.loadScripts();
    this.loadCss();
    this.authService.changeState(false);
    this.isDashbord = this.authService.IS_DASHBORD;
  }
  ngOnInit(): void {
    console.log("ini")
    console.log(this.isDashbord)
    this.authService.changeState(false);
    //this.isDashbord = this.authService.IS_DASHBORD;
  }

  login(){
    this.authService.login(this.loginModel).subscribe(
      (response: any) => {
        this.router.navigate(['/dashboard']);
        console.log("succccc")
        this.authService.registerSuccessfulLogin(response.access_token);
        console.log(response.access_token);
      },
      (error: any) => {
        console.log("errp")
        console.log(error);
      }
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
