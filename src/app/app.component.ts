import { Component } from '@angular/core';

import { Platform, AlertController, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {CacheService} from 'ionic-cache';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'ರಂಗಸ್ಥಳ',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'ಸರ್ವಸಂಗ್ರಹ',
      url: '/library',
      icon: 'md-briefcase'
    },
    {
      title: 'ಯಕ್ಷಧ್ವನಿ',
      url: '/yakshadhwani',
      icon: 'ios-mic'
    },
    {
      title: 'ಧ್ವನಿಮುದ್ರಣ ಬಳಗ',
      url: '/dhwanimudrana',
      icon: 'md-microphone'
    },
    {
      title: 'ರೆಕಾರ್ಡಿಂಗ್ ಮೇಳ',
      url: '/recordingMela',
      icon: 'ios-megaphone'
    },
    {
      title: 'ಹುಡುಕಾಟ...',
      url: '/search',
      icon: 'search'
    },
    {
      title: 'ಸಂಪರ್ಕ...',
      url: '/contactus',
      icon: 'mail'
    },
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private cache: CacheService,
    private alertCtrl: AlertController,
    private navCtrl: NavController,
    private router: Router,
  ) {
    this.cache.setDefaultTTL(60 * 60 * 4);
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    this.platform.backButton.subscribe(() => {
        
      this.cache.setOfflineInvalidate(false);

      if (this.router.url != "/home") {
        this.navCtrl.back();
      }
      else {
        this.presentAlertConfirm();
      }
      /*else if (this.router.url == '/tabs/tab1') {
        navigator['app'].exitApp()
      } */
    });
  }
  async presentAlertConfirm() {
    const alert = await this.alertCtrl.create({
      header: 'ಚಾಕಿಗೆ ?',
      message: 'ಪರದೆ ಎಳೆಯುತ್ತಿರುವುದನ್ನು ಖಚಿತಪಡಿಸಿ !',
      buttons: [
        {
          text: 'ಇಲ್ಲ',
          handler: () => {
            // console.log('Confirm Cancel');
          }
        }, {
          text: 'ಹೌದು',
          handler: () => {
            // console.log('Confirm Okay');
            navigator['app'].exitApp();
          }
        }
      ]
    });

    await alert.present();
  }
}
