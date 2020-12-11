import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  toggleTheme(event){
    if (event.detail.checked){
      document.body.setAttribute('color-theme','dark');

    } else {
      document.body.setAttribute('color-theme','light');
    }
  }

  myAdverts(){
    this.router.navigateByUrl("/my-adverts");
  }

  myBooks(){
    this.router.navigateByUrl("/my-books");
  }

  search(){
    this.router.navigateByUrl("/home");
  }
}
