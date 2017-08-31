import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';

import { Autostart } from '@ionic-native/autostart';
import { NativeAudio } from '@ionic-native/native-audio';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private autostart: Autostart, private nativeAudio: NativeAudio) {
    this.nativeAudio.preloadSimple('splash', 'assets/Opening.mp3');
    platform.ready().then(() => {
      this.nativeAudio.play('splash');
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      // this.nativeAudio.stop('splash');
      this.autostart.enable();
    });
  }
  

  
}

