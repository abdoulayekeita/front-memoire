import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth/auth.service'
import { NgForm } from '@angular/forms';
import { UserDto } from '../../model/user-dto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
   registerUserModel = new UserDto();

   constructor(
     private authService: AuthService,
     private router: Router ,
     ) {
      this.loadScripts();
      this.loadCss();
    }
    ngOnInit(): void {
    }
    register(){
     this.authService.register(this.registerUserModel).subscribe(
      (response: any) => {
        this.router.navigate(['/login']);
        console.log("succccc")
        console.log(response.message);
      },
      (error: any) => {
        console.log("errp")
        console.log(error.error.message);
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
