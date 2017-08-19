import { Component } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';
import { HelpPage } from '../help/help';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  JumlahSoal = 1;
  private KodeSoal = 1;
  
  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController
    ) {

  }

  tambah(){
    if(this.JumlahSoal<5)
    {
      this.JumlahSoal++
    }
  }
  kurang(){
    if(this.JumlahSoal>1)
    {
      this.JumlahSoal--
    }
  }

  gotoHelp(){
    this.navCtrl.push(HelpPage);
  }

}
