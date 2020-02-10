import { Component } from '@angular/core';

import { faGem } from '@fortawesome/free-solid-svg-icons';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  
  faGem = faGem;

  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Ouro',
      url: '/list',
      icon: 'cart'
    },
    {
      title: 'Pedras Preciosas',
      url: '/produtos',
      icon: 'basket'
    },
    {
      title: 'Materiais Pesados',
      url: '/mpesados',
      icon: 'construct'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
