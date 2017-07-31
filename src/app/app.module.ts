import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';


import { HomePage } from '../pages/home/home';
import { CariJawabanPage } from '../pages/cari-jawaban/cari-jawaban';
import { CerdasCermatPage } from '../pages/cerdas-cermat/cerdas-cermat';
import { KumpulanBukuPage } from '../pages/kumpulan-buku/kumpulan-buku';
import { KunciPintarPage } from '../pages/kunci-pintar/kunci-pintar';
import { LatihanSoalPage } from '../pages/latihan-soal/latihan-soal';
import { ShslPage } from '../pages/shsl/shsl';
import { LoginPage } from '../pages/login/login';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CariJawabanPage, 
    CerdasCermatPage,
    KumpulanBukuPage,
    KunciPintarPage, 
    LatihanSoalPage,
    LoginPage,
    ShslPage 
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CariJawabanPage, 
    CerdasCermatPage,
    KumpulanBukuPage,
    KunciPintarPage, 
    LatihanSoalPage,
    LoginPage,
    ShslPage 
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
