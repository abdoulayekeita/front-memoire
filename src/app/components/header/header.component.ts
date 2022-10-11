import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { AuthService } from '../../service/auth/auth.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewChecked {
  currentItem = 'Television';
  isDashbord: boolean;
  isLoggedIn = false;
  constructor(private authService: AuthService, private router: Router) {
     this.loadScripts();
     this.loadCss();
     this.isDashbord = this.authService.IS_DASHBORD;
   }
  ngAfterViewChecked(): void {
    console.log("kkkkkkkkkkkkkkkkkkkkkkkkk")
    this.isDashbord = this.authService.IS_DASHBORD;
    console.log(this.isDashbord)
  }

  ngOnInit(): void {
    console.log("iniheader")
    console.log(this.isDashbord)
    this.isLoggedIn = this.authService.isUserLoggedIn();
    console.log('menu ->' + this.isLoggedIn);
  }
  ngAfterContentInit(): void {
    console.log("iniafterllll")
    console.log(this.isDashbord)
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['/test']);

  }
 loadScripts() {
      const dynamicScripts = [
       '/assets/vendor/aos/aos.js',
       '/assets/vendor/bootstrap/js/bootstrap.bundle.min.js',
       '/assets/vendor/glightbox/js/glightbox.min.js',
       '/assets/vendor/isotope-layout/isotope.pkgd.min.js',
       '/assets/vendor/php-email-form/validate.js',
       '/assets/vendor/swiper/swiper-bundle.min.js',
       '/assets/js/main.js',
       '/https://cdnjs.cloudflare.com/ajax/libs/jquery.isotope/3.0.6/isotope.pkgd.js',
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
           '/assets/css/home/style.css',
           '/assets/vendor/animate.css/animate.min.css',
           '/assets/vendor/aos/aos.css',
           '/assets/vendor/bootstrap/css/bootstrap.min.css',
           '/assets/vendor/bootstrap-icons/bootstrap-icons.css',
           '/assets/vendor/boxicons/css/boxicons.min.css',
           '/assets/vendor/glightbox/css/glightbox.min.css',
           '/assets/vendor/remixicon/remixicon.css',
           '/assets/vendor/swiper/swiper-bundle.min.css',
          ];
          for (let i = 0; i < dynamicCss.length; i++) {
            const node = document.createElement('link');
            node.href = dynamicCss[i];
            node.rel = 'stylesheet';
            document.getElementsByTagName('head')[0].appendChild(node);
          }
        }
}
