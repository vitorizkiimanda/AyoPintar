import { Component } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';
import { CariJawabanPage } from '../cari-jawaban/cari-jawaban';
import { CerdasCermatPage } from '../cerdas-cermat/cerdas-cermat';
import { KumpulanBukuPage } from '../kumpulan-buku/kumpulan-buku';
import { KunciPintarPage } from '../kunci-pintar/kunci-pintar';
import { LatihanSoalPage } from '../latihan-soal/latihan-soal';
import { ShslPage } from '../shsl/shsl';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController
    ) {

  }

  gotoCariJawaban(){
    let alert = this.alertCtrl.create({
      title: '',
      subTitle: 'Coming Soon.',
      buttons: ['OK']
    });
    alert.present();
  }

  gotoKunciPintar(){
    this.navCtrl.push(KunciPintarPage);
  }

  gotoLatihanSoal(){
    this.navCtrl.push(LatihanSoalPage);
  }

  gotoSHSL(){
    this.navCtrl.push(ShslPage);
  }

  gotoCerdasCermat(){
    this.navCtrl.push(CerdasCermatPage);
  }

  gotoKumpulanBuku(){
    this.navCtrl.push(KumpulanBukuPage);
  }

}
