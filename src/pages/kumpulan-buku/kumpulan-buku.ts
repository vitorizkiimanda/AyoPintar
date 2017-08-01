import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { KumpulanBukuSakuPage } from '../kumpulan-buku-saku/kumpulan-buku-saku';
import { KumpulanBukuLainPage } from '../kumpulan-buku-lain/kumpulan-buku-lain';

/**
 * Generated class for the KumpulanBukuPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-kumpulan-buku',
  templateUrl: 'kumpulan-buku.html',
})
export class KumpulanBukuPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad KumpulanBukuPage');
  }

  gotoBukuSaku(){
    this.navCtrl.push(KumpulanBukuSakuPage);
  }

  gotoBukuLain(){
    this.navCtrl.push(KumpulanBukuLainPage);
  }

}
